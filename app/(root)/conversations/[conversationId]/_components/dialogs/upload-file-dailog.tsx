"use client";

import Uploader from "@/components/shared/uploader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useConversation } from "@/hooks/useConversation";
import { createMessage } from "@/lib/actions/message.action";
import { CONVERSATION, LIST_CONVERSATIONS, MESSAGES } from "@/lib/constants";
import { uploadFileSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FileIcon, ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function UploadFileDailog({
  open,
  toggle,
  type,
}: {
  open: boolean;
  toggle: (newState: boolean) => void;
  type: "image" | "file";
}) {
  const { conversationId } = useConversation();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof uploadFileSchema>>({
    resolver: zodResolver(uploadFileSchema),
    defaultValues: {
      files: [],
      names: [],
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      conversationId,
      type,
      content,
      name,
    }: {
      conversationId: string;
      type: string;
      content: string[];
      name: string[];
    }) => createMessage({ conversationId, type, content, name }),
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }
      form.reset();
      toggle(false);
      queryClient.invalidateQueries({ queryKey: [MESSAGES, conversationId] });
      queryClient.invalidateQueries({
        queryKey: [CONVERSATION, conversationId],
      });
      queryClient.invalidateQueries({ queryKey: [LIST_CONVERSATIONS] });
    },
  });

  const handleSubmit = async (values: z.infer<typeof uploadFileSchema>) => {
    mutate({
      conversationId: conversationId as string,
      type,
      content: values.files,
      name: values.names,
    });
  };

  const files = form.watch("files");
  const names = form.watch("names");

  return (
    <Dialog open={open} onOpenChange={(open) => toggle(open)}>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          {type === "image" ? <ImageIcon /> : <FileIcon />}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {type === "image" ? "Upload images" : "Upload files"}
          </DialogTitle>
          <DialogDescription>
            {type === "image"
              ? "Upload images and videos"
              : "Upload pdf, docx and xlsx"}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="files"
              render={() => (
                <FormItem>
                  <FormControl>
                    <div className="py-4">
                      <Uploader
                        type={type}
                        onChange={(uploadedFiles) => {
                          form.setValue("files", [
                            ...files,
                            ...uploadedFiles.map((f) => f.url),
                          ]);
                          form.setValue("names", [
                            ...names,
                            ...uploadedFiles.map((f) => f.name),
                          ]);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="names"
              render={({ field }) => <input type="hidden" {...field} />}
            />
            <DialogFooter>
              <Button type="submit" disabled={!files.length || isPending}>
                ส่ง
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
