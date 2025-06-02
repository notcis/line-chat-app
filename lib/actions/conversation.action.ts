"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";
import { formatError } from "../utils";

export async function getConversation(conversationId: string) {
  const session = await auth();

  if (!session) throw new Error("Unauthorized");

  const currentUser = await prisma.users.findFirst({
    where: {
      id: session.user?.id,
    },
  });

  if (!currentUser) throw new Error("User not found");

  const conversation = await prisma.conversations.findUnique({
    where: {
      id: conversationId,
    },
  });

  if (!conversation) {
    throw new Error("Conversation not found");
  }

  const membership = await prisma.conversationMembers.findUnique({
    where: {
      by_memberId_conversationId: {
        memberId: currentUser.id,
        conversationId: conversationId,
      },
    },
  });

  if (!membership) {
    throw new Error("You aren't a member of this conversation");
  }

  const allConversationMemberships = await prisma.conversationMembers.findMany({
    where: {
      conversationId: conversationId,
    },
    include: {
      member: true,
    },
  });

  if (!conversation.isGroup) {
    const otherMembership = allConversationMemberships.find(
      (m) => m.memberId !== currentUser.id
    );

    if (!otherMembership || !otherMembership.member) {
      throw new Error("Other member not found");
    }

    return {
      ...conversation,
      otherMember: {
        ...otherMembership.member,
        lastSeenMessageId: otherMembership.lastSeenMessageId,
      },
      otherMembers: null,
    };
  } else {
    const otherMembers = allConversationMemberships
      .filter((m) => m.memberId !== currentUser.id)
      .map((m) => ({
        id: m.member.id,
        username: m.member.username,
        lastSeenMessageId: m.lastSeenMessageId,
      }));

    return {
      ...conversation,
      otherMembers,
      otherMember: null,
    };
  }
}

export const createGroup = async ({
  members,
  name,
}: {
  members: string[];
  name: string;
}) => {
  try {
    const session = await auth();

    if (!session) throw new Error("Unauthorized");

    const currentUser = await prisma.users.findFirst({
      where: {
        id: session.user?.id,
      },
    });

    if (!currentUser) throw new Error("User not found");

    // 1. สร้าง conversation ใหม่
    const conversation = await prisma.conversations.create({
      data: {
        isGroup: true,
        name,
      },
    });

    // 2. เพิ่มสมาชิกทั้งหมดเข้า conversationMembers
    const allMemberIds = [...members, currentUser.id];

    await prisma.conversationMembers.createMany({
      data: allMemberIds.map((memberId) => ({
        memberId,
        conversationId: conversation.id,
      })),
    });

    // 3. คืนค่า conversation ID หรือ object ตามต้องการ
    return {
      success: true,
      data: conversation.id,
      message: "Group created!",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
};

export const deleteGroup = async ({
  conversationId,
}: {
  conversationId: string;
}) => {
  try {
    const session = await auth();

    if (!session) throw new Error("Unauthorized");

    const currentUser = await prisma.users.findFirst({
      where: {
        id: session.user?.id,
      },
    });

    if (!currentUser) throw new Error("User not found");

    await prisma.$transaction(async (tx) => {
      // 1. ตรวจสอบ conversation
      const conversation = await tx.conversations.findUnique({
        where: {
          id: conversationId,
        },
      });

      if (!conversation) {
        throw new Error("Conversation not found");
      }

      // 2. ตรวจสอบจำนวนสมาชิก
      const memberships = await tx.conversationMembers.findMany({
        where: {
          conversationId: conversationId,
        },
      });

      if (!memberships || memberships.length <= 1) {
        throw new Error("This conversation does not have any members");
      }
      // 3. ลบข้อความทั้งหมดในห้อง
      await tx.messages.deleteMany({
        where: {
          conversationId: conversationId,
        },
      });

      // 4. ลบสมาชิกทั้งหมด
      await tx.conversationMembers.deleteMany({
        where: {
          conversationId: conversationId,
        },
      });

      // 5. ลบห้องสนทนา
      await tx.conversations.delete({
        where: {
          id: conversationId,
        },
      });
    });

    return {
      success: true,
      message: "Group deleted",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
};

export const leaveGroup = async ({
  conversationId,
}: {
  conversationId: string;
}) => {
  try {
    const session = await auth();

    if (!session) throw new Error("Unauthorized");

    const currentUser = await prisma.users.findFirst({
      where: {
        id: session.user?.id,
      },
    });

    if (!currentUser) throw new Error("User not found");

    await prisma.$transaction(async (tx) => {
      // 1. ตรวจสอบ conversation
      const conversation = await tx.conversations.findUnique({
        where: {
          id: conversationId,
        },
      });

      if (!conversation) {
        throw new Error("Conversation not found");
      }

      // ตรวจสอบ membership (ต้องมี composite unique constraint)
      const membership = await tx.conversationMembers.findUnique({
        where: {
          by_memberId_conversationId: {
            memberId: currentUser.id,
            conversationId: conversationId,
          },
        },
      });

      if (!membership) {
        throw new Error("You are not a member of this group");
      }

      // ลบ membership ออกจากห้อง
      await tx.conversationMembers.delete({
        where: {
          id: membership.id,
        },
      });
    });

    return {
      success: true,
      message: "Group left",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
};

export const markRead = async ({
  conversationId,
  messageId,
}: {
  conversationId: string;
  messageId: string;
}) => {
  try {
    const session = await auth();

    if (!session) throw new Error("Unauthorized");

    const currentUser = await prisma.users.findFirst({
      where: {
        id: session.user?.id,
      },
    });

    if (!currentUser) throw new Error("User not found");

    // 1. ตรวจสอบว่า currentUser เป็นสมาชิกของห้อง
    const membership = await prisma.conversationMembers.findUnique({
      where: {
        by_memberId_conversationId: {
          memberId: currentUser.id,
          conversationId: conversationId,
        },
      },
    });

    if (!membership) {
      throw new Error("You aren't a member of this conversation");
    }

    // 2. ตรวจสอบว่า message มีอยู่จริงหรือไม่
    const lastMessage = await prisma.messages.findUnique({
      where: {
        id: messageId,
      },
    });

    // 3. อัปเดต lastSeenMessageId ใน conversationMembers
    const res = await prisma.conversationMembers.update({
      where: {
        id: membership.id,
      },
      data: {
        lastSeenMessageId: lastMessage ? lastMessage.id : undefined,
      },
    });

    return {
      success: true,
      message: "read",
      data: res,
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
};
