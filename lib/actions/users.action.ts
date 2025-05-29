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
