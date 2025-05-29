"use server";

import { AddFriendType, LoginType, RegisterType } from "@/type";
import {
  addFriendFormSchema,
  loginFormSchema,
  registerFormSchema,
} from "../validators";
import { auth, signIn, signOut } from "@/auth";
import { formatError } from "../utils";
import { prisma } from "../prisma";
import { hashSync } from "bcrypt-ts-edge";
import { revalidatePath } from "next/cache";

export const loginWithCredentials = async ({ email, password }: LoginType) => {
  try {
    const login = loginFormSchema.parse({
      email,
      password,
    });

    await signIn("credentials", {
      email: login.email,
      password: login.password,
      redirect: false,
    });

    return {
      success: true,
      message: "เข้าสู่ระบบสำเร็จ",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
    };
  }
};

export async function registerUser(values: RegisterType) {
  try {
    const user = registerFormSchema.parse(values);

    const hashedPassword = hashSync(user.password, 10);

    await prisma.users.create({
      data: {
        email: user.email,
        password: hashedPassword,
        username: user.username,
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });

    return {
      success: true,
      message: "ลงทะเบียนสำเร็จ",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}

export async function logout() {
  await signOut();
}

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

export async function getFriendRequests() {
  const session = await auth();

  if (!session) throw new Error("Unauthorized");

  const currentUser = await prisma.users.findFirst({
    where: {
      id: session.user?.id,
    },
  });

  if (!currentUser) throw new Error("User not found");

  const requests = await prisma.requests.findMany({
    where: {
      receiverId: currentUser.id,
    },
    include: {
      sender: true,
    },
  });
  if (!requests) throw new Error("Request sender could not be found");

  return { requests };
}

export async function getFriendCount() {
  const session = await auth();

  if (!session) throw new Error("Unauthorized");

  const currentUser = await prisma.users.findFirst({
    where: {
      id: session.user?.id,
    },
  });

  if (!currentUser) throw new Error("User not found");

  const requestsCount = await prisma.requests.count({
    where: {
      receiverId: currentUser.id,
    },
  });

  return { requestsCount };
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

    revalidatePath("/");

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

    revalidatePath("/");

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
