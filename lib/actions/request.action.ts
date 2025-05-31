"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";
import { AddFriendType } from "@/type";
import { addFriendFormSchema } from "../validators";
import { formatError } from "../utils";

export async function addFriendRequest(value: AddFriendType) {
  try {
    const session = await auth();

    if (!session) throw new Error("Unauthorized");

    const currentUser = await prisma.users.findFirst({
      where: {
        id: session.user?.id,
      },
    });

    if (!currentUser) throw new Error("User not found");

    const { email } = addFriendFormSchema.parse(value);

    if (currentUser.email === email)
      throw new Error("Can't send a request to yourself");

    const receiver = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!receiver) throw new Error("User could not be found");

    const requestAlreadySent = await prisma.requests.findFirst({
      where: {
        receiverId: receiver.id,
        senderId: currentUser.id,
      },
    });

    if (requestAlreadySent) throw new Error("Request already sent");

    const requestAlreadyReceived = await prisma.requests.findFirst({
      where: {
        receiverId: currentUser.id,
        senderId: receiver.id,
      },
    });

    if (requestAlreadyReceived)
      throw new Error("This user has already sent you a request");

    const existingFriend = await prisma.friends.findFirst({
      where: {
        OR: [
          {
            user1Id: currentUser.id,
            user2Id: receiver.id,
          },
          {
            user1Id: receiver.id,
            user2Id: currentUser.id,
          },
        ],
      },
    });

    if (existingFriend) {
      throw new Error("You are already friends with this user");
    }

    await prisma.requests.create({
      data: {
        senderId: currentUser.id,
        receiverId: receiver.id,
      },
    });

    return {
      success: true,
      message: "Friend request sent!",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}

export async function denyFriendRequest(requestId: string) {
  try {
    const session = await auth();

    if (!session) throw new Error("Unauthorized");

    const currentUser = await prisma.users.findFirst({
      where: {
        id: session.user?.id,
      },
    });

    if (!currentUser) throw new Error("User not found");

    const request = await prisma.requests.findFirst({
      where: {
        id: requestId,
      },
    });

    if (!request || request.receiverId !== currentUser.id) {
      throw new Error("There was an error denying this request");
    }

    await prisma.requests.delete({
      where: {
        id: request.id,
      },
    });

    return {
      success: true,
      message: "Friend request denied",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}

export async function acceptFriendRequest(requestId: string) {
  try {
    const session = await auth();

    if (!session) throw new Error("Unauthorized");

    const currentUser = await prisma.users.findFirst({
      where: {
        id: session.user?.id,
      },
    });

    if (!currentUser) throw new Error("User not found");

    const request = await prisma.requests.findFirst({
      where: {
        id: requestId,
      },
    });

    if (!request || request.receiverId !== currentUser.id) {
      throw new Error("There was an error accepting this request");
    }

    await prisma.$transaction(async (tx) => {
      const conversation = await tx.conversations.create({
        data: {
          isGroup: false,
        },
      });

      await tx.friends.create({
        data: {
          user1Id: currentUser.id,
          user2Id: request.senderId,
          conversationId: conversation.id,
        },
      });

      await tx.conversationMembers.create({
        data: {
          memberId: currentUser.id,
          conversationId: conversation.id,
        },
      });

      await tx.conversationMembers.create({
        data: {
          memberId: request.senderId,
          conversationId: conversation.id,
        },
      });

      await tx.requests.delete({
        where: {
          id: request.id,
        },
      });
    });

    return {
      success: true,
      message: "Friend request accepted",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}
