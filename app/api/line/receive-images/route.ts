import { ADMIN_ID } from "@/lib/constants";
import { prisma } from "@/lib/prisma";
import { formatError } from "@/lib/utils";
import { receiveLineImageApiSchema } from "@/lib/validators";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const {
    lineId,
    displayName,
    pictureUrl,
    buffer,
    messageEventId,
    messageType,
  } = await request.json();

  const newBuffer = Buffer.from(buffer, "base64");

  try {
    const receive = receiveLineImageApiSchema.parse({
      lineId,
      imageUrl: pictureUrl,
      username: displayName,
      buffer: newBuffer,
      messageEventId,
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

    const filename = `${Date.now()}-${messageEventId}.jpg`;

    const presignRes = await fetch(
      "https://api.uploadthing.com/v6/uploadFiles",
      {
        method: "POST",
        headers: {
          "X-Uploadthing-Api-Key": process.env.UPLOADTHING_SECRET!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          files: [
            {
              name: filename,
              size: receive.buffer.length,
              type: "image/jpeg",
              customId: null,
            },
          ],
          acl: "public-read",
          metadata: null,
          contentDisposition: "inline",
        }),
      }
    );

    if (!presignRes.ok) {
      const errText = await presignRes.text();
      throw new Error(`UploadThing presign failed: ${errText}`);
    }

    const presignData = await presignRes.json();
    const uploadInfo = presignData.data?.[0];

    if (!uploadInfo) {
      throw new Error("UploadThing response invalid or missing data[0]");
    }

    const form = new FormData();
    for (const [key, value] of Object.entries(uploadInfo.fields)) {
      form.append(key, String(value));
    }
    form.append(
      "file",
      new Blob([receive.buffer], { type: "image/jpeg" }),
      filename
    );

    const uploadRes = await fetch(uploadInfo.url, {
      method: "POST",
      body: form,
    });

    if (!uploadRes.ok) {
      const error = await uploadRes.text();
      throw new Error("Upload to S3 failed: " + error);
    }

    const message = await prisma.messages.create({
      data: {
        senderId: currentUserId,
        conversationId: conversationId as string,
        type: receive.messageType,
        content: [uploadInfo.ufsUrl],
        name: [uploadInfo.fileName],
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
