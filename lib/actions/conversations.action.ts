"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";

export async function getConversations() {
  const session = await auth();

  if (!session) throw new Error("Unauthorized");

  const currentUser = await prisma.users.findFirst({
    where: {
      id: session.user?.id,
    },
  });

  if (!currentUser) throw new Error("User not found");

  const conversationMemberships = await prisma.conversationMembers.findMany({
    where: {
      memberId: currentUser.id,
    },
    include: {
      conversation: {
        include: {
          conversationMembers: {
            include: {
              member: true, // ดึงข้อมูล users ของสมาชิกแต่ละคน
            },
          },
          lastMessage: true,
        },
      },
      lastSeenMessage: true,
    },
  });

  const conversationsWithDetails = await Promise.all(
    conversationMemberships.map(async (membership) => {
      const conversation = membership.conversation;
      const lastMessage = conversation.lastMessage;

      const lastSeenTime = membership.lastSeenMessage?.createdAt ?? new Date(0);

      // 3. ดึงข้อความที่ยังไม่ได้อ่าน
      const unseenMessages = await prisma.messages.findMany({
        where: {
          conversationId: conversation.id,
          createdAt: {
            gt: lastSeenTime,
          },
          NOT: {
            senderId: currentUser.id,
          },
        },
      });

      const unseenCount = unseenMessages.length;

      // 4. แยก logic group vs private chat
      if (conversation.isGroup) {
        return {
          conversation,
          lastMessage,
          unseenCount,
        };
      } else {
        const otherMember = conversation.conversationMembers.find(
          (m) => m.member.id !== currentUser.id
        )?.member;

        return {
          conversation,
          otherMember,
          lastMessage,
          unseenCount,
        };
      }
    })
  );

  return conversationsWithDetails;
}

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
