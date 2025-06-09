import { ADMIN_ID } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { checkContactDep, formatError } from "@/lib/utils";
import { receiveLineMessageApiSchema } from "@/lib/validators";
import { NextRequest, NextResponse } from "next/server";
import { toZonedTime } from "date-fns-tz";
import { differenceInMinutes } from "date-fns";

export async function POST(request: NextRequest) {
  const { lineId, displayName, pictureUrl, userMessage, messageType } =
    await request.json();

  try {
    // check params
    const receive = receiveLineMessageApiSchema.parse({
      lineId,
      imageUrl: pictureUrl,
      username: displayName,
      userMessage,
      messageType,
    });

    // หา user จาก line
    const lineUser = await prisma.users.findFirst({
      where: {
        lineId: lineId,
      },
    });

    let currentUser;

    // check ว่ามี user line ไหม  ถ้าไม่มี ให้สร้าง user ถ้ามีให้ update ข้อมูล
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
    let checkDate;

    // check user กดเลือก คุยกับฝ่ายไหน ถ้าไม่ได้กด ให้คุยกับ admin หลัก
    if (!currentUser.contactDepartment) {
      answer = ADMIN_ID;
    } else {
      // ถ้ากดเลือก  ให้ check SessionExpired มี เวลา 10 นาที หลังจากกด

      const timeZone = "Asia/Bangkok";
      const updatedAtInBangkok = toZonedTime(currentUser.updatedAt, timeZone);
      const isSessionExpired =
        differenceInMinutes(new Date(), updatedAtInBangkok) > 10;

      checkDate = updatedAtInBangkok;

      // ถ้ายังไม่หมดอายุ ให้เลือก admin แต่ละฝ่าย
      if (!isSessionExpired) {
        answer = checkContactDep(currentUser.contactDepartment);
      } else {
        // ถ้าหมดอายุให้เลือก admin หลัก
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

    // ถ้ายังไม่เป็น freind ให้ สร้าง conversation id
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
      // ถ้ามีแล้ว ให้ get ค่า conversation id จาก friend
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
      data: checkDate,
    });
  } catch (error) {
    return NextResponse.json({
      message: formatError(error),
    });
  }
}
