import { prisma } from "@/lib/prisma";
import { formatError } from "@/lib/utils";
import { createContactDepartmentSchema } from "@/lib/validators";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { lineId, department } = await request.json();
    const recive = createContactDepartmentSchema.parse({
      lineId: lineId,
      department: department,
    });

    const user = await prisma.users.findUnique({
      where: {
        id: recive.lineId,
      },
    });

    if (!user) throw new Error("no line user");

    await prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        contactDepartment: recive.department,
        updatedAt: new Date(),
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
