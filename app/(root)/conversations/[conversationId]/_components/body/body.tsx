"use client";

import { markRead } from "@/lib/actions/conversation.action";
import Message from "./message";
import { useConversation } from "@/hooks/useConversation";
import { getMessages } from "@/lib/actions/message.action";
import { CONVERSATION, LIST_CONVERSATIONS, MESSAGES } from "@/lib/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Body({
  members,
}: {
  members: {
    lastSeenMessageId?: string;
    username?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }[];
}) {
  const queryClient = useQueryClient();
  const { conversationId } = useConversation();

  const { data: messages } = useQuery({
    queryKey: [MESSAGES, conversationId],
    queryFn: () => getMessages({ conversationId: conversationId as string }),
    refetchInterval: 3000,
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation({
    mutationFn: ({
      conversationId,
      messageId,
    }: {
      conversationId: string;
      messageId: string;
    }) => markRead({ conversationId, messageId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [MESSAGES, conversationId] });
      queryClient.invalidateQueries({
        queryKey: [CONVERSATION, conversationId],
      });
      queryClient.invalidateQueries({ queryKey: [LIST_CONVERSATIONS] });
    },
  });

  /*   const lastReadMessageIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (messages && messages.length > 0) {
      const latestMessageId = messages[0].message.id;

      if (lastReadMessageIdRef.current !== latestMessageId) {
        mutate({
          conversationId: conversationId as string,
          messageId: latestMessageId,
        });
        lastReadMessageIdRef.current = latestMessageId;
      }
    }
  }, [messages, conversationId, mutate]); */

  useEffect(() => {
    if (messages && messages.length > 0) {
      mutate({
        conversationId: conversationId as string,
        messageId: messages[0].message.id,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages?.length, conversationId, mutate]);

  const formatSeenBy = (names: string[]) => {
    switch (names.length) {
      case 1:
        return (
          <p className="text-muted-foreground text-sm text-right">{`อ่านแล้ว ${names[0]}`}</p>
        );

      case 2:
        return (
          <p className="text-muted-foreground text-sm text-right">{`อ่านแล้ว ${names[0]} และ ${names[1]}`}</p>
        );

      default:
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p className="text-muted-foreground text-sm text-right">{`อ่านแล้ว ${
                  names[0]
                }, ${names[1]} และ อีก ${names.length - 2} คน`}</p>
              </TooltipTrigger>
              <TooltipContent>
                <ul>
                  {names.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
    }
  };
  const getSeenMessage = (messageId: string) => {
    const seenUsers = members
      .filter((member) => member.lastSeenMessageId === messageId)
      .map((user) => user.username?.split(" ")[0])
      .filter(
        (name): name is string => typeof name === "string" && name.length > 0
      );

    if (seenUsers.length === 0) {
      return undefined;
    }

    return formatSeenBy(seenUsers);
  };

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
            messages[index - 1]?.message.senderId ===
            messages[index]?.message.senderId;

          const seenMessage = isCurrentUser
            ? getSeenMessage(message.id)
            : undefined;

          return (
            <Message
              key={message.id}
              formCurrentUser={isCurrentUser}
              senderImage={senderImage}
              senderName={senderName}
              lastByUser={lastByUser}
              content={message.content}
              createAt={message.createdAt}
              seen={seenMessage}
              type={message.type}
            />
          );
        }
      )}
    </div>
  );
}
