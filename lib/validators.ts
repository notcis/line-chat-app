import { z } from "zod";

const passwordSchema = z
  .string()
  .min(5, "Password must contain at least 5 cahracters");

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});
