import { hashSync } from "bcrypt-ts-edge";
export const sampleData = {
  users: [
    {
      email: "notcis07@gmail.com",
      username: "Notcis",
      password: hashSync("49310407", 10),
    },
    {
      email: "ploy@gmail.com",
      username: "Ploy",
      password: hashSync("49310407", 10),
    },
  ],
};
