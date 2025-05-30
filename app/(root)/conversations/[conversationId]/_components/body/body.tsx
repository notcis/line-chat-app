"use client";

import { useEffect, useState } from "react";
import Message from "./message";
import { useConversation } from "@/hooks/useConversation";
import { getMessages } from "@/lib/actions/message.action";

export default function Body() {
  const { conversationId } = useConversation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any>(null);

  const fecthMessages = async () => {
    const res = await getMessages({ conversationId: conversationId as string });
    setMessages(res);
  };

  useEffect(() => {
    fecthMessages();

    const interval = setInterval(() => {
      fecthMessages();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
