import { z } from "zod";
import { LINE_MESSAGE_TYPE } from "./constants";

const passwordSchema = z
  .string()
  .min(5, "Password must contain at least 5 cahracters");

export const passwordMatchSchema = z
  .object({
    password: passwordSchema,
    passwordConfirm: z.string().min(1, "Password Confirm can't be empty"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Passwords do not match",
      });
    }
  });

export const loginFormSchema = z.object({
  email: z.string().min(1, "Email can't be empty").email(),
  password: z.string().min(1, "Password can't be empty"),
});

export const registerFormSchema = z
  .object({
    email: z.string().min(1, "Email can't be empty").email(),
    username: z.string().min(1, "Username can't be empty"),
  })
  .and(passwordMatchSchema);

export const addFriendFormSchema = z.object({
  email: z
    .string()
    .min(1, "This field can't be empty")
    .email("Please enter a valid email"),
});

export const chatMessageSchema = z.object({
  content: z.string().min(1, "This field can't be empty"),
});

export const receiveLineMessageApiSchema = z.object({
  lineId: z.string().min(1, "lineId require"),
  username: z.string().min(1, "displayName require"),
  imageUrl: z.string().min(1, "pictureUrl require"),
  userMessage: z.string().min(1, "userMessage require"),
  messageType: z.string().refine((type) => LINE_MESSAGE_TYPE.includes(type), {
    message: "Invalid message type",
  }),
});

export const createGroupFormSchema = z.object({
  name: z.string().min(1, "Name can't be empty"),
  members: z.string().array().min(1, "You must select at least 1 friend"),
});

export const uploadFileSchema = z.object({
  files: z.string().array().min(1, "You must select at least 1 file"),
});
