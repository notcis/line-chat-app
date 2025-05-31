"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";

export async function getFriendRequests() {
  const session = await auth();

  if (!session) throw new Error("Unauthorized");

  const currentUser = await prisma.users.findFirst({
    where: {
      id: session.user?.id,
    },
  });

  if (!currentUser) throw new Error("User not found");

  const requests = await prisma.requests.findMany({
    where: {
      receiverId: currentUser.id,
    },
    include: {
      sender: true,
    },
  });
  if (!requests) throw new Error("Request sender could not be found");

  return { requests };
}

export async function getFriendCount() {
  const session = await auth();

  if (!session) throw new Error("Unauthorized");

  const currentUser = await prisma.users.findFirst({
    where: {
      id: session.user?.id,
    },
  });

  if (!currentUser) throw new Error("User not found");

  const requestsCount = await prisma.requests.count({
    where: {
      receiverId: currentUser.id,
    },
  });

  return { requestsCount };
}
