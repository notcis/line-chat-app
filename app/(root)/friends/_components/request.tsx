"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  acceptFriendRequest,
  denyFriendRequest,
} from "@/lib/actions/users.action";
import { CheckIcon, UserIcon, XIcon } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

export default function Request({
  id,
  imageUrl,
  username,
  email,
}: {
  id: string;
  imageUrl?: string | undefined;
  username: string;
  email: string;
}) {
  const [isPending, startTransition] = useTransition();

  const handleDenyFriend = async () => {
    startTransition(async () => {
      const res = await denyFriendRequest(id);
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
    });
  };

  const handleAcceptFriend = async () => {
    startTransition(async () => {
      const res = await acceptFriendRequest(id);
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
    });
  };

  return (
    <Card className="w-full p-2 flex flex-row items-center justify-between gap-2">
      <div className=" flex items-center gap-4 truncate">
        <Avatar>
          <AvatarImage src={imageUrl} />
          <AvatarFallback>
            <UserIcon />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col truncate">
          <h1 className="truncate">{username}</h1>
          <p className=" text-xs text-muted-foreground truncate">{email}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon" onClick={handleAcceptFriend}>
          <CheckIcon />
        </Button>
        <Button
          variant="destructive"
          size="icon"
          disabled={isPending}
          onClick={handleDenyFriend}
        >
          <XIcon className=" h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
