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

    let conversationId;
    let currentUserId;

    if (!lineUser?.lineId && !lineUser) {
      const resData = await prisma.$transaction(async (tx) => {
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

        let answer;

        if (currentUser.contactDepartment) {
          const isSessionExpired =
            Date.now() - new Date(currentUser.updatedAt).getTime() >
            10 * 60 * 1000;

          if (isSessionExpired) {
            answer = ADMIN_ID;
          } else {
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
          }
        } else {
          answer = ADMIN_ID;
        }

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
          currentUserId: currentUser.id,
        };
      });

      currentUserId = resData.currentUserId;
      conversationId = resData.conversationId;
    } else {
      currentUserId = lineUser.id;
      const conversation = await prisma.friends.findFirst({
        where: {
          user1Id: currentUserId,
        },
        select: { conversationId: true },
      });

      conversationId = conversation?.conversationId;
    }

    if (!conversationId && !currentUserId)
      throw new Error("can not find conversation");

    const membership = await prisma.conversationMembers.findUnique({
      where: {
        by_memberId_conversationId: {
          memberId: currentUserId,
          conversationId: conversationId as string,
        },
      },
    });

    if (!membership) {
      throw new Error("You aren't a member of this conversation");
    }

    const message = await prisma.messages.create({
      data: {
        senderId: currentUserId,
        conversationId: conversationId as string,
        type: receive.messageType,
        content: [receive.userMessage],
      },
    });

    await prisma.conversations.update({
      where: {
        id: conversationId as string,
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
