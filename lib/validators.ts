import { z } from "zod";

const passwordSchema = z
  .string()
  .min(5, "Password must contain at least 5 cahracters");

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export const addFriendFormSchema = z.object({
  email: z
    .string()
    .min(1, "This field can't be empty")
    .email("Please enter a valid email"),
});
