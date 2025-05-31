"use server";

import { LoginType, RegisterType } from "@/type";
import { loginFormSchema, registerFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
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
