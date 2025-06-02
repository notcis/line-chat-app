"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";

export const getFriends = async () => {
  const session = await auth();

  if (!session) throw new Error("Unauthorized");

  const currentUser = await prisma.users.findFirst({
    where: {
      id: session.user?.id,
    },
  });

  if (!currentUser) throw new Error("User not found");

  // 1. ดึง friendships ที่ currentUser เป็น user1 หรือ user2
  const friendships = await prisma.friends.findMany({
    where: {
      OR: [{ user1Id: currentUser.id }, { user2Id: currentUser.id }],
    },
    include: {
      user1: true,
      user2: true,
    },
  });

  // 2. ดึงรายชื่อเพื่อน (คนที่ไม่ใช่ currentUser)
  const friends = friendships.map((friendship) => {
    const friend =
      friendship.user1Id === currentUser.id
        ? friendship.user2
        : friendship.user1;

    if (!friend) {
      throw new Error("Friend could not be found");
    }

    return friend;
  });

  return friends;
};
