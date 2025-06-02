"use client";

import ConversationContainer from "@/components/shared/conversation/conversation-container";
import { Loader2Icon } from "lucide-react";
import Header from "./header";
import Body from "./body/body";
import ChatInput from "./input/chat-input";
import { CONVERSATION } from "@/lib/constants";
import { getConversation } from "@/lib/actions/conversation.action";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import RemoveFriendDialog from "./dialogs/remove-friend-dialog";
import DeleteGroupDialog from "./dialogs/delete-group-dialog";
import LeaveGroupDialog from "./dialogs/leave-group-dialog";

export default function ConversationMain({
  conversationId,
}: {
  conversationId: string;
}) {
  const [removeFriendDialogOpen, setRemoveFriendDialogOpen] = useState(false);
  const [deleteGroupDialogOpen, setDeleteGroupDialogOpen] = useState(false);
  const [leaveGroupDialogOpen, setLeaveGroupDialogOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [callType, setCallType] = useState<"audio" | "video" | null>(null);

  const { data: conversation } = useQuery({
    queryKey: [CONVERSATION, conversationId],
    queryFn: () => getConversation(conversationId),
  });

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
      <RemoveFriendDialog
        conversationId={conversationId}
        open={removeFriendDialogOpen}
        setOpen={setRemoveFriendDialogOpen}
      />
      <DeleteGroupDialog
        conversationId={conversationId}
        open={deleteGroupDialogOpen}
        setOpen={setDeleteGroupDialogOpen}
      />
      <LeaveGroupDialog
        conversationId={conversationId}
        open={leaveGroupDialogOpen}
        setOpen={setLeaveGroupDialogOpen}
      />
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
        options={
          conversation.isGroup
            ? [
                {
                  label: "Leave group",
                  destructive: false,
                  onClick: () => setLeaveGroupDialogOpen(true),
                },
                {
                  label: "Delete group",
                  destructive: true,
                  onClick: () => setDeleteGroupDialogOpen(true),
                },
              ]
            : [
                {
                  label: "Remove friend",
                  destructive: true,
                  onClick: () => setRemoveFriendDialogOpen(true),
                },
              ]
        }
      />
      <Body
        members={
          conversation.isGroup
            ? conversation.otherMembers
              ? conversation.otherMembers.map((member) => ({
                  ...member,
                  lastSeenMessageId: member.lastSeenMessageId ?? undefined,
                  username: member.username ?? undefined,
                }))
              : []
            : conversation.otherMember
            ? [
                {
                  ...conversation.otherMember,
                  lastSeenMessageId:
                    conversation.otherMember.lastSeenMessageId ?? undefined,
                  username: conversation.otherMember.username ?? undefined,
                },
              ]
            : []
        }
      />
      <ChatInput />
    </ConversationContainer>
  );
}
