import { addFriendFormSchema, loginFormSchema } from "@/lib/validators";
import { z } from "zod";

export type LoginType = z.infer<typeof loginFormSchema>;
export type AddFriendType = z.infer<typeof addFriendFormSchema>;
