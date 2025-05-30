"use client";

import ConversationFallback from "@/components/shared/conversation/conversation-fallback";
import ItemList from "@/components/shared/item-list/item-list";
import AddFriendDialog from "./_components/add-friend-dialog";
import { getFriendRequests } from "@/lib/actions/users.action";
import { Loader2Icon } from "lucide-react";
import Request from "./_components/request";
import { useQuery } from "@tanstack/react-query";

export default function Friendspage() {
  const { data } = useQuery({
    queryKey: ["listFriendRequest"],
    queryFn: getFriendRequests,
  });

  return (
    <>
      <ItemList title="Friends" action={<AddFriendDialog />}>
        {data?.requests ? (
          data?.requests.length === 0 ? (
            <p className=" w-full h-full flex items-center justify-center">
              No friend requests found
            </p>
          ) : (
            data.requests.map((request) => (
              <Request
                key={request.id}
                id={request.id}
                imageUrl={request.sender.imageUrl || undefined}
                username={request.sender.username!}
                email={request.sender.email}
              />
            ))
          )
        ) : (
          <Loader2Icon className="h-8 w-8 animate-spin" />
        )}
      </ItemList>
      <ConversationFallback />
    </>
  );
}
