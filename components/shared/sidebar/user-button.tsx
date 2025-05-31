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
import { useQueryClient } from "@tanstack/react-query";
import { LogOutIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserButton() {
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();

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
    queryClient.removeQueries();
    await logout();
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
        className="w-56 flex items-center justify-around"
        forceMount
      >
        <DropdownMenuLabel className="text-sm flex flex-col gap-1">
          <div>{session.user.name}</div>
          <div>{session.user.email}</div>
        </DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Button variant="destructive" size="icon" onClick={handleLogout}>
            <LogOutIcon />
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
