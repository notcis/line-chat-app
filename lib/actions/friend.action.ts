"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";
import { formatError } from "../utils";

export const deleteFriend = async ({
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

      // 2. ตรวจสอบสมาชิก (ควรมี 2 คนเท่านั้นใน 1-on-1)
      const memberships = await tx.conversationMembers.findMany({
        where: {
          conversationId: conversationId,
        },
      });

      if (!memberships || memberships.length !== 2) {
        throw new Error("This conversation does not have any members");
      }

      // 3. หาความสัมพันธ์เพื่อนที่เชื่อมกับ conversation นี้
      const friendship = await tx.friends.findUnique({
        where: {
          conversationId: conversationId,
        },
      });

      if (!friendship) {
        throw new Error("Friend could not be found");
      }

      // 4. ลบข้อความทั้งหมดในห้อง
      await tx.messages.deleteMany({
        where: {
          conversationId: conversationId,
        },
      });

      // 5. ลบสมาชิกทั้งหมดในห้อง
      await tx.conversationMembers.deleteMany({
        where: {
          conversationId: conversationId,
        },
      });

      // 6. ลบ friendship record
      await tx.friends.delete({
        where: {
          id: friendship.id,
        },
      });

      // 7. ลบ conversation
      await tx.conversations.delete({
        where: {
          id: conversationId,
        },
      });
    });

    return {
      success: true,
      message: "Removed friend",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
};
