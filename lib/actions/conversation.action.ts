"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";

export async function getConversation(conversationId: string) {
  const session = await auth();

  if (!session) throw new Error("Unauthorized");

  const currentUser = await prisma.users.findFirst({
    where: {
      id: session.user?.id,
    },
  });

  if (!currentUser) throw new Error("User not found");

  const conversation = await prisma.conversations.findUnique({
    where: {
      id: conversationId,
    },
  });

  if (!conversation) {
    throw new Error("Conversation not found");
  }

  const membership = await prisma.conversationMembers.findUnique({
    where: {
      by_memberId_conversationId: {
        memberId: currentUser.id,
        conversationId: conversationId,
      },
    },
  });

  if (!membership) {
    throw new Error("You aren't a member of this conversation");
  }

  const allConversationMemberships = await prisma.conversationMembers.findMany({
    where: {
      conversationId: conversationId,
    },
    include: {
      member: true,
    },
  });

  if (!conversation.isGroup) {
    const otherMembership = allConversationMemberships.find(
      (m) => m.memberId !== currentUser.id
    );

    if (!otherMembership || !otherMembership.member) {
      throw new Error("Other member not found");
    }

    return {
      ...conversation,
      otherMember: {
        ...otherMembership.member,
        lastSeenMessageId: otherMembership.lastSeenMessageId,
      },
      otherMembers: null,
    };
  } else {
    const otherMembers = allConversationMemberships
      .filter((m) => m.memberId !== currentUser.id)
      .map((m) => ({
        id: m.member.id,
        username: m.member.username,
        lastSeenMessageId: m.lastSeenMessageId,
      }));

    return {
      ...conversation,
      otherMembers,
      otherMember: null,
    };
  }
}
