import { hashSync } from "bcrypt-ts-edge";
export const sampleData = {
  users: [
    {
      email: "notcis07@gmail.com",
      username: "Notcis",
      password: hashSync("49310407", 10),
      lineId: "123456",
    },
    {
      email: "ploy@gmail.com",
      username: "Ploy Kitta",
      password: hashSync("49310407", 10),
      lineId: "654321",
    },
  ],
};
