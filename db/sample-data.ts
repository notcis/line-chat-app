import { hashSync } from "bcrypt-ts-edge";
export const sampleData = {
  users: [
    {
      email: "admin@coopmsds.com",
      username: "Admin",
      password: hashSync("coop2012", 10),
      lineId: "123456789",
    },
    {
      email: "ploy@gmail.com",
      username: "Ploy Kitta",
      password: hashSync("49310407", 10),
      lineId: "987654321",
    },
    {
      email: "notcis07@gmail.com",
      username: "Notcis",
      password: hashSync("49310407", 10),
      lineId: "456987123",
    },
  ],
};
