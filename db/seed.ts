import { prisma } from "@/lib/prisma";
import { sampleData } from "./sample-data";

async function main() {
  await prisma.users.deleteMany();

  await prisma.users.createMany({
    data: sampleData.users,
  });

  console.log("Database seeded successfully!");
}

main();

//npx tsx ./db/seed
