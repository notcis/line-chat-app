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

      const lastMessage = await getLastMessageDetails({
        messageId: conversation.lastMessageId as string,
      });

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

const getLastMessageDetails = async ({
  messageId,
}: {
  messageId: string | undefined;
}) => {
  if (!messageId) return null;

  const message = await prisma.messages.findUnique({
    where: {
      id: messageId,
    },
    include: {
      sender: true,
    },
  });

  if (!message || !message.sender) return null;

  const content = getMessageContent(
    message.type,
    message.content as unknown as string
  );

  return {
    content,
    sender: message.sender.username,
  };
};

const getMessageContent = (type: string, content: string) => {
  switch (type) {
    case "text":
      return content;
    case "image":
      return "[Image]";
    case "file":
      return "[File]";
    case "call":
      return "[Call]";
    default:
      return content;
  }
};
