"use client";

import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useConversation } from "@/hooks/useConversation";
import { createMessage } from "@/lib/actions/message.action";
import { chatMessageSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import TextareaAutosize from "react-textarea-autosize";
import { Button } from "@/components/ui/button";
import { SendHorizonalIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CONVERSATION, LIST_CONVERSATIONS, MESSAGES } from "@/lib/constants";
import MessageActionPopover from "./message-action-popover";
import { useTheme } from "next-themes";

import EmojiPicker, { Theme } from "emoji-picker-react";

export default function ChatInput() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { conversationId } = useConversation();
  const queryClient = useQueryClient();

  /////////////////// set Emoji ///////////////////////////////

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const emojiPickerRef = useRef<any>(null);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const { theme } = useTheme();

  ///////////////////////////////////////////////////////////////

  const form = useForm<z.infer<typeof chatMessageSchema>>({
    resolver: zodResolver(chatMessageSchema),
    defaultValues: {
      content: "",
    },
  });

  /////////////////// set Emoji ///////////////////////////////

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setEmojiPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /////////////////////////////////////////////////////////////

  ///////////// sumit form ///////////////////////////////////////////

  const { mutate, isPending } = useMutation({
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
      form.reset();
      textareaRef.current?.focus();
      queryClient.invalidateQueries({ queryKey: [MESSAGES, conversationId] });
      queryClient.invalidateQueries({
        queryKey: [CONVERSATION, conversationId],
      });
      queryClient.invalidateQueries({ queryKey: [LIST_CONVERSATIONS] });
    },
  });

  const handleSubmit = async (values: z.infer<typeof chatMessageSchema>) => {
    mutate({
      conversationId: conversationId as string,
      type: "text",
      content: [values.content],
    });
  };

  ////////////////////////////////////////////////////////////////////////

  /////////////////// set Emoji ///////////////////////////////

  const content = form.watch("content", "");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: any) => {
    const { value, selectionStart } = event.target;

    if (selectionStart !== null) {
      form.setValue("content", value);
      setCursorPosition(selectionStart);
    }
  };

  const insertEmoji = (emoji: string) => {
    const newText = [
      content.substring(0, cursorPosition),
      emoji,
      content.substring(cursorPosition),
    ].join("");

    form.setValue("content", newText);
    setCursorPosition(cursorPosition + emoji.length);
  };

  return (
    <Card className="w-full p-2 rounded-lg relative">
      <div className=" absolute bottom-16" ref={emojiPickerRef}>
        <EmojiPicker
          open={emojiPickerOpen}
          theme={theme as Theme}
          onEmojiClick={(emojiDetails) => {
            insertEmoji(emojiDetails.emoji);
            setEmojiPickerOpen(false);
          }}
          lazyLoadEmojis
        />
      </div>
      <div className="flex gap-2 items-end w-full">
        <MessageActionPopover setEmojiPickerOpen={setEmojiPickerOpen} />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex gap-2 items-end w-full"
          >
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="h-full w-full">
                  <FormControl>
                    <TextareaAutosize
                      onKeyDown={async (e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();

                          await form.handleSubmit(handleSubmit)();
                        }
                      }}
                      rows={1}
                      maxRows={3}
                      {...field}
                      onChange={handleInputChange}
                      onClick={handleInputChange}
                      placeholder="พิมพ์ไรดีอ่ะ..."
                      className=" min-h-full w-full resize-none border-0 outline-0 placeholder:text-muted-foreground p-1.5"
                      ref={textareaRef}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isPending} size="icon" type="submit">
              <SendHorizonalIcon />
            </Button>
          </form>
        </Form>
      </div>
    </Card>
  );
}
