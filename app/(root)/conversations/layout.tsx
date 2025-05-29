import ItemList from "@/components/shared/item-list/item-list";
import { getConversations } from "@/lib/actions/conversations.action";
import { Loader2Icon } from "lucide-react";
import DmConversationItem from "./_components/dm-conversation-item";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();

  return (
    <>
      <ItemList title="Conversations">
        {conversations ? (
          conversations.length === 0 ? (
            <p className="w-full h-full flex items-center justify-center">
              No conversation found
            </p>
          ) : (
            conversations.map((conversation) =>
              conversation.conversation.isGroup ? null : (
                <DmConversationItem
                  key={conversation.conversation.id}
                  id={conversation.conversation.id}
                  username={conversation.otherMember?.username || ""}
                  imageUrl={conversation.otherMember?.imageUrl || ""}
                />
              )
            )
          )
        ) : (
          <Loader2Icon />
        )}
      </ItemList>

      {children}
    </>
  );
}
