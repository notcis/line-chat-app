import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ConversationMain from "./_components/conversation-main";
import { CONVERSATION, MESSAGES } from "@/lib/constants";
import { getConversation } from "@/lib/actions/conversation.action";
import { getMessages } from "@/lib/actions/message.action";

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ conversationId: string }>;
}) {
  const { conversationId } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [CONVERSATION, conversationId],
    queryFn: () => getConversation(conversationId),
  });

  await queryClient.prefetchQuery({
    queryKey: [MESSAGES, conversationId],
    queryFn: () => getMessages({ conversationId: conversationId as string }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ConversationMain conversationId={conversationId} />;
    </HydrationBoundary>
  );
}
