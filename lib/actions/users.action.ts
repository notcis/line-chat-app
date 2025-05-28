"use server";

import { LoginType } from "@/type";
import { loginFormSchema } from "../validators";
import { signIn } from "@/auth";

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
