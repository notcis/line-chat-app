"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/lib/actions/users.action";
import { LogOutIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserButton() {
  const { data: session, status, update } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session?.user?.id) {
    return (
      <Button size="sm" variant="link" className="w-full" asChild>
        <Link className=" text-xs" href="/login">
          เข้าสู่ระบบ
        </Link>
      </Button>
    );
  }

  const firstInitial = session?.user?.name?.charAt(0).toUpperCase() || "U";

  const handleLogout = async () => {
    await logout();
    await update();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full bg-gray-200" variant="ghost">
          {firstInitial}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        side="top"
        className="flex px-2.5"
        forceMount
      >
        <DropdownMenuLabel className=" text-sm text-muted-foreground">
          {session.user.email}
        </DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleLogout}
          >
            <LogOutIcon />
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
