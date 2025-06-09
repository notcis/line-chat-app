import { ADMIN_ID, COM_ID, CREDIT_ID } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { formatError } from "@/lib/utils";
import { receiveLineMessageApiSchema } from "@/lib/validators";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { lineId, displayName, pictureUrl, userMessage, messageType } =
    await request.json();

  try {
    const receive = receiveLineMessageApiSchema.parse({
      lineId,
      imageUrl: pictureUrl,
      username: displayName,
      userMessage,
      messageType,
    });

    const lineUser = await prisma.users.findFirst({
      where: {
        lineId: lineId,
      },
    });

    let currentUser;

    if (!lineUser) {
      currentUser = await prisma.users.create({
        data: {
          lineId: receive.lineId,
          username: receive.username,
          imageUrl: receive.imageUrl,
        },
      });
    } else {
      currentUser = await prisma.users.update({
        where: {
          id: lineUser.id,
        },
        data: {
          username: receive.username,
          imageUrl: receive.imageUrl,
        },
      });
    }

    let answer;

    if (!currentUser.contactDepartment) {
      answer = ADMIN_ID;
    } else {
      const isSessionExpired =
        Date.now() - new Date(currentUser.updatedAt).getTime() > 10 * 60 * 1000;

      if (!isSessionExpired) {
        switch (currentUser.contactDepartment) {
          case "contact=credit":
            answer = CREDIT_ID;
            break;
          case "contact=com":
            answer = COM_ID;
            break;
          default:
            answer = ADMIN_ID;
        }
      } else {
        answer = ADMIN_ID;
      }
    }

    // check friend

    const friend = await prisma.friends.findFirst({
      where: {
        user1Id: currentUser.id,
        user2Id: answer,
      },
    });

    let conversationId;

    if (!friend) {
      const resData = await prisma.$transaction(async (tx) => {
        const conversation = await tx.conversations.create({
          data: {
            isGroup: false,
          },
        });

        await tx.friends.create({
          data: {
            user1Id: currentUser.id,
            user2Id: answer,
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
            memberId: answer,
            conversationId: conversation.id,
          },
        });

        return {
          conversationId: conversation.id,
        };
      });

      conversationId = resData.conversationId;
    } else {
      conversationId = friend.conversationId;
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

    const message = await prisma.messages.create({
      data: {
        senderId: currentUser.id,
        conversationId: conversationId as string,
        type: receive.messageType,
        content: [receive.userMessage],
      },
    });

    await prisma.conversations.update({
      where: {
        id: conversationId,
      },
      data: {
        lastMessageId: message.id,
      },
    });

    return NextResponse.json({
      message: "success",
    });
  } catch (error) {
    return NextResponse.json({
      message: formatError(error),
    });
  }
}
