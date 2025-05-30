"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";
import { formatError } from "../utils";
import { revalidatePath } from "next/cache";

export const createMessage = async ({
  conversationId,
  type,
  content,
}: {
  conversationId: string;
  type: string;
  content: string[];
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

    const message = await prisma.messages.create({
      data: {
        senderId: currentUser.id,
        conversationId: conversationId,
        type: type,
        content: content,
      },
    });

    await prisma.conversations.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageId: message.id,
      },
    });

    revalidatePath(`/conversations/${conversationId}`);

    return {
      success: true,
      message,
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
};

export const getMessages = async ({
  conversationId,
}: {
  conversationId: string;
}) => {
  const session = await auth();

  if (!session) throw new Error("Unauthorized");

  const currentUser = await prisma.users.findFirst({
    where: {
      id: session.user?.id,
    },
  });

  if (!currentUser) throw new Error("User not found");

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

  const messages = await prisma.messages.findMany({
    where: {
      conversationId: conversationId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      sender: true, // ✅ join กับ users table
    },
  });

  const messagesWithUsers = messages.map((message) => {
    const sender = message.sender;

    if (!sender) {
      throw new Error("Could not find sender of message");
    }

    return {
      message,
      senderImage: sender.imageUrl,
      senderName: sender.username,
      isCurrentUser: sender.id === currentUser.id,
    };
  });

  return messagesWithUsers;
};
