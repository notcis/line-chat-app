import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ConversationMain from "./_components/conversation-main";
import { CONVERSATION } from "@/lib/constants";
import { getConversation } from "@/lib/actions/conversation.action";

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

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ConversationMain conversationId={conversationId} />;
    </HydrationBoundary>
  );
}
