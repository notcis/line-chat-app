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

    return NextResponse.json({
      data: {
        receive,
      },
      message: "success",
    });
  } catch (error) {
    return NextResponse.json({
      message: formatError(error),
    });
  }
}
