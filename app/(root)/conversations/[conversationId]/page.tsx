import ConversationContainer from "@/components/shared/conversation/conversation-container";
import { getConversation } from "@/lib/actions/conversations.action";
import { Loader2Icon } from "lucide-react";
import Header from "./_components/header";
import Body from "./_components/body/body";
import ChatInput from "./_components/input/chat-input";
import { getMessages } from "@/lib/actions/message.action";

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const { conversationId } = await params;

  const conversation = await getConversation(conversationId);
  const messages = await getMessages({ conversationId });

  return conversation === undefined ? (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2Icon className="h-8 w-8 animate-spin" />
    </div>
  ) : conversation === null ? (
    <p className="w-full h-full flex items-center justify-center">
      Conversation not found
    </p>
  ) : (
    <ConversationContainer>
      <Header
        imageUrl={
          conversation.isGroup
            ? undefined
            : conversation.otherMember?.imageUrl || undefined
        }
        name={
          (conversation.isGroup
            ? conversation.name
            : conversation.otherMember?.username) || ""
        }
      />
      <Body messages={messages} />
      <ChatInput />
    </ConversationContainer>
  );
}
