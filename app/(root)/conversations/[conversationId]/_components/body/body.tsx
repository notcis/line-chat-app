"use client";

import Message from "./message";
import { useConversation } from "@/hooks/useConversation";
import { getMessages } from "@/lib/actions/message.action";
import { MESSAGES } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export default function Body() {
  const { conversationId } = useConversation();

  const { data: messages } = useQuery({
    queryKey: [MESSAGES, conversationId],
    queryFn: () => getMessages({ conversationId: conversationId as string }),
    refetchInterval: 3000,
    refetchOnWindowFocus: false,
  });

  return (
    <div className=" flex-1 w-full flex overflow-y-scroll flex-col-reverse gap-2 p3 no-scrollbar">
      {messages?.map(
        (
          {
            message,
            senderImage,
            senderName,
            isCurrentUser,
          }: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message: any;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            senderImage: any;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            senderName: any;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            isCurrentUser: any;
          },
          index: number
        ) => {
          const lastByUser =
            message[index - 1]?.message.senderId ===
            message[index]?.message.senderId;

          return (
            <Message
              key={message.id}
              formCurrentUser={isCurrentUser}
              senderImage={senderImage}
              senderName={senderName}
              lastByUser={lastByUser}
              content={message.content}
              createAt={message.createdAt}
              type={message.type}
            />
          );
        }
      )}
    </div>
  );
}
