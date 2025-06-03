"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { createGroup } from "@/lib/actions/conversation.action";
import { getFriends } from "@/lib/actions/friends.action";
import { LIST_CONVERSATIONS, LIST_FRIENDS } from "@/lib/constants";
import { createGroupFormSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CirclePlusIcon, X } from "lucide-react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export default function CreateGroupDialog() {
  const queryClient = useQueryClient();

  const { data: friends } = useQuery({
    queryKey: [LIST_FRIENDS],
    queryFn: getFriends,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ members, name }: { members: string[]; name: string }) =>
      createGroup({ members, name }),
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      form.reset();
      queryClient.invalidateQueries({ queryKey: [LIST_FRIENDS] });
      queryClient.invalidateQueries({ queryKey: [LIST_CONVERSATIONS] });
    },
  });

  const form = useForm<z.infer<typeof createGroupFormSchema>>({
    resolver: zodResolver(createGroupFormSchema),
    defaultValues: { name: "", members: [] },
  });

  const members = form.watch("members", []);

  const unselectedFriends = useMemo(() => {
    return friends
      ? friends.filter((friend) => !members.includes(friend.id))
      : [];
  }, [members, friends]);

  const handleSubmit = async (
    values: z.infer<typeof createGroupFormSchema>
  ) => {
    mutate({ name: values.name, members: values.members });
  };

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" asChild>
            <DialogTrigger>
              <CirclePlusIcon />
            </DialogTrigger>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Create Group</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create group</DialogTitle>
          <DialogDescription>
            Add your friends to get started!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Group name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="members"
              render={() => (
                <FormItem>
                  <FormLabel>Friends</FormLabel>
                  <FormControl>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        disabled={unselectedFriends.length === 0}
                        asChild
                      >
                        <Button className="w-full" variant="outline">
                          Select
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        {unselectedFriends.map((friend) => (
                          <DropdownMenuCheckboxItem
                            key={friend.id}
                            className="flex items-center gap-2 w-full p-2"
                            onCheckedChange={(check) => {
                              if (check) {
                                form.setValue("members", [
                                  ...members,
                                  friend.id,
                                ]);
                              }
                            }}
                          >
                            <Avatar>
                              <AvatarImage src={friend.imageUrl || undefined} />
                              <AvatarFallback>
                                {friend.username?.substring(0, 1).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <h4 className=" truncate">{friend.username}</h4>
                          </DropdownMenuCheckboxItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {members && members.length ? (
              <Card className="flex flex-row items-center gap-3 overflow-x-auto w-full h-24 p-2 no-scrollbar">
                {friends
                  ?.filter((friend) => members.includes(friend.id))
                  .map((f) => (
                    <div
                      key={f.id}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={f.imageUrl || undefined} />
                          <AvatarFallback>
                            {f.username?.substring(0, 1).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <X
                          className="text-muted-foreground w-4 h-4 absolute bottom-8 left-7 bg-muted rounded-full cursor-pointer"
                          onClick={() =>
                            form.setValue(
                              "members",
                              members.filter((id) => id !== f.id)
                            )
                          }
                        />
                      </div>
                      <p className="truncate text-sm">
                        {f.username?.split(" ")[0]}
                      </p>
                    </div>
                  ))}
              </Card>
            ) : null}
            <DialogFooter>
              <Button className="w-full" disabled={isPending} type="submit">
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
