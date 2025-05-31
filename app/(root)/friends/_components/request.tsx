"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  acceptFriendRequest,
  denyFriendRequest,
} from "@/lib/actions/request.action";
import {
  COUNT_FRIEND_REQUEST,
  LIST_CONVERSATIONS,
  LIST_FRIEND_REQUEST,
} from "@/lib/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckIcon, UserIcon, XIcon } from "lucide-react";
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
  const queryClient = useQueryClient();

  const { mutate: deny, isPending: isDening } = useMutation({
    mutationFn: (id: string) => denyFriendRequest(id),
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: [LIST_FRIEND_REQUEST] });
      queryClient.invalidateQueries({ queryKey: [COUNT_FRIEND_REQUEST] });
      queryClient.invalidateQueries({ queryKey: [LIST_CONVERSATIONS] });
    },
  });

  const { mutate: accept, isPending: isAcceping } = useMutation({
    mutationFn: (id: string) => acceptFriendRequest(id),
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: [LIST_FRIEND_REQUEST] });
      queryClient.invalidateQueries({ queryKey: [COUNT_FRIEND_REQUEST] });
      queryClient.invalidateQueries({ queryKey: [LIST_CONVERSATIONS] });
    },
  });

  const handleDenyFriend = async () => {
    deny(id);
  };

  const handleAcceptFriend = async () => {
    accept(id);
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
        <Button size="icon" onClick={handleAcceptFriend} disabled={isAcceping}>
          <CheckIcon />
        </Button>
        <Button
          variant="destructive"
          size="icon"
          disabled={isDening}
          onClick={handleDenyFriend}
        >
          <XIcon className=" h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
