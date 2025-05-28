"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session?.user?.id) {
    return (
      <Button size="sm" variant="outline" className="w-full" asChild>
        <Link href="/login">เข้าสู่ระบบ</Link>
      </Button>
    );
  }

  return <div>{session?.user?.name}</div>;
}
