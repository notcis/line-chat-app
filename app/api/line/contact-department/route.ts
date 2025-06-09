import { prisma } from "@/lib/prisma";
import { formatError } from "@/lib/utils";
import { createContactDepartmentSchema } from "@/lib/validators";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { lineId, department } = await request.json();
    const received = createContactDepartmentSchema.parse({
      lineId: lineId,
      department: department,
    });

    const user = await prisma.users.findFirst({
      where: {
        lineId: received.lineId,
      },
    });

    if (!user) {
      await prisma.users.create({
        data: {
          lineId: received.lineId,
          contactDepartment: received.department,
          updatedAt: new Date(),
        },
      });
    } else {
      await prisma.users.update({
        where: {
          id: user.id,
        },
        data: {
          contactDepartment: received.department,
          updatedAt: new Date(),
        },
      });
    }

    return NextResponse.json({
      message: "success",
    });
  } catch (error) {
    return NextResponse.json({
      message: formatError(error),
    });
  }
}
