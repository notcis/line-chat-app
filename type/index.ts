import {
  addFriendFormSchema,
  loginFormSchema,
  registerFormSchema,
} from "@/lib/validators";
import { z } from "zod";

export type LoginType = z.infer<typeof loginFormSchema>;
export type RegisterType = z.infer<typeof registerFormSchema>;
export type AddFriendType = z.infer<typeof addFriendFormSchema>;
