import { ADMIN_ID } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { formatError } from "@/lib/utils";
import { receiveLineMessageApiSchema } from "@/lib/validators";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { lineId, displayName, pictureUrl, userMessage } = await request.json();

  try {
    const receive = receiveLineMessageApiSchema.parse({
      lineId,
      imageUrl: pictureUrl,
      username: displayName,
      userMessage,
    });

    const lineUser = await prisma.users.findFirst({
      where: {
        lineId: lineId,
      },
    });

    let conversationId;

    if (!lineUser) {
      conversationId = await prisma.$transaction(async (tx) => {
        const currentUser = await tx.users.create({
          data: {
            lineId: receive.lineId,
            username: receive.username,
            imageUrl: receive.imageUrl,
          },
        });

        const conversation = await tx.conversations.create({
          data: {
            isGroup: false,
          },
        });

        await tx.friends.create({
          data: {
            user1Id: currentUser.id,
            user2Id: ADMIN_ID,
            conversationId: conversation.id,
          },
        });
        await tx.conversationMembers.create({
          data: {
            memberId: currentUser.id,
            conversationId: conversation.id,
          },
        });

        await tx.conversationMembers.create({
          data: {
            memberId: ADMIN_ID,
            conversationId: conversation.id,
          },
        });

        return conversation.id;
      });
    } else {
    }
    return NextResponse.json({
      data: {
        conversationId,
      },
      message: "success",
    });
  } catch (error) {
    return NextResponse.json({
      message: formatError(error),
    });
  }
}
