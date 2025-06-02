"use client";

import ItemList from "@/components/shared/item-list/item-list";
import { getConversations } from "@/lib/actions/conversations.action";
import { Loader2Icon } from "lucide-react";
import DmConversationItem from "./_components/dm-conversation-item";
import { useQuery } from "@tanstack/react-query";
import { LIST_CONVERSATIONS } from "@/lib/constants";
import CreateGroupDialog from "./_components/create-group-dialog";
import GroupConversationItem from "./_components/group-conversation-item";

export default function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: conversations } = useQuery({
    queryKey: [LIST_CONVERSATIONS],
    queryFn: getConversations,
    refetchInterval: 5000,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <ItemList title="พูดคุยกัน" action={<CreateGroupDialog />}>
        {conversations ? (
          conversations.length === 0 ? (
            <p className="w-full h-full flex items-center justify-center">
              No conversation found
            </p>
          ) : (
            conversations.map((conversation) =>
              conversation.conversation.isGroup ? (
                <GroupConversationItem
                  key={conversation.conversation.id}
                  id={conversation.conversation.id}
                  name={conversation.conversation.name || ""}
                  lastMessageContent={conversation.lastMessage?.content}
                  lastMessageSender={
                    conversation.lastMessage?.sender || undefined
                  }
                  unseenCount={conversation.unseenCount}
                />
              ) : (
                <DmConversationItem
                  key={conversation.conversation.id}
                  id={conversation.conversation.id}
                  username={conversation.otherMember?.username || ""}
                  imageUrl={conversation.otherMember?.imageUrl || ""}
                  lastMessageContent={conversation.lastMessage?.content}
                  lastMessageSender={
                    conversation.lastMessage?.sender || undefined
                  }
                  unseenCount={conversation.unseenCount}
                />
              )
            )
          )
        ) : (
          <Loader2Icon className="w-8 h-8 animate-spin" />
        )}
      </ItemList>

      {children}
    </>
  );
}
