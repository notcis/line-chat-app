import { addFriendFormSchema, loginFormSchema } from "@/lib/validators";
import { z } from "zod";

export type LoginType = z.infer<typeof loginFormSchema>;
export type AddFriendType = z.infer<typeof addFriendFormSchema>;

//AUTH_SECRET="J4KGPcOUAeWzS6P8fPYMTmM7ams9E6H9mLDqOZ4L9c8=" # Added by `npx auth`. Read more: https://cli.authjs.dev
