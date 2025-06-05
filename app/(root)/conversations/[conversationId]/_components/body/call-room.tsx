"use client";

import { Button } from "@/components/ui/button";
import { useConversation } from "@/hooks/useConversation";
import { createMessage } from "@/lib/actions/message.action";
import { CONVERSATION, LIST_CONVERSATIONS, MESSAGES } from "@/lib/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LiveKitRoom, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";

export default function CallRoom({
  video,
  audio,
  handleDisconnect,
}: {
  video: boolean;
  audio: boolean;
  handleDisconnect: () => void;
}) {
  const { data: session } = useSession();
  const [token, setToken] = useState("");
  const { conversationId } = useConversation();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({
      conversationId,
      type,
      content,
    }: {
      conversationId: string;
      type: string;
      content: string[];
    }) => createMessage({ conversationId, type, content }),
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      queryClient.invalidateQueries({ queryKey: [MESSAGES, conversationId] });
      queryClient.invalidateQueries({
        queryKey: [CONVERSATION, conversationId],
      });
      queryClient.invalidateQueries({ queryKey: [LIST_CONVERSATIONS] });
    },
  });

  useEffect(() => {
    if (!session?.user?.name) return;

    console.log(session?.user?.name);

    (async () => {
      try {
        const res = await fetch(
          `/api/livekit?room=${conversationId}&username=${
            session.user?.name
          } (${Math.floor(Math.random() * 2000)})`
        );

        const data = await res.json();
        setToken(data.token);
        console.log(data);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.log(error);

        toast.error("Cound not join the call");
      }
    })();
  }, [session?.user?.name, conversationId]);

  if (token === "") {
    return (
      <div className="w-full h-full flex-col justify-center items-center">
        <Loader2Icon className=" animate-spin h-16 w-16 text-foreground" />
        <p className=" text-sm text-foreground">Joining call...</p>
        <Button
          className="mt-4"
          variant="destructive"
          onClick={handleDisconnect}
        >
          Cancel
        </Button>
      </div>
    );
  }

  console.log(token);

  return (
    <div className=" w-full h-full">
      <LiveKitRoom
        data-lk-theme="default"
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        token={token}
        connect={true}
        video={video}
        audio={audio}
        onDisconnected={() => handleDisconnect()}
        onConnected={() => {
          mutate({
            conversationId: conversationId.toString(),
            type: "call",
            content: [],
          });
        }}
      >
        <VideoConference />
      </LiveKitRoom>
    </div>
  );
}
