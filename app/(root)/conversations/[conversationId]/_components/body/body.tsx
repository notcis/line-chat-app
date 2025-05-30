import { useState } from "react";
import Message from "./message";
import { useConversation } from "@/hooks/useConversation";
import { getMessages } from "@/lib/actions/message.action";
import { any, string } from "zod";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Body({ messages }: { messages: any }) {
  const { conversationId } = useConversation();

  const [messages, setMessages] = useState(null);

  const fecthMessages = async () => {
    const res = await getMessages({ conversationId: conversationId as string });
    setMessages(res);
  };

  return (
    <div className=" flex-1 w-full flex overflow-y-scroll flex-col-reverse gap-2 p3 no-scrollbar">
      {messages?.map(
        (
          { message, senderImage, senderName, isCurrentUser },
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
