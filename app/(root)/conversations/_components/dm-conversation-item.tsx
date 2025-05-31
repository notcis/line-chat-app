import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function DmConversationItem({
  id,
  username,
  imageUrl,
  lastMessageSender,
  lastMessageContent,
}: {
  id: string;
  username: string;
  imageUrl: string;
  lastMessageSender?: string;
  lastMessageContent?: string;
}) {
  const firstInitial = username.charAt(0).toUpperCase() || "U";

  return (
    <Link href={`/conversations/${id}`} className="w-full">
      <Card className="p-2 flex flex-row items-center gap-4 truncate">
        <div className="flex flex-row items-center gap-4 truncate">
          <Avatar>
            <AvatarImage src={imageUrl} />
            <AvatarFallback>{firstInitial}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col truncate">
            <h4 className=" truncate">{username}</h4>
            {lastMessageSender && lastMessageContent ? (
              <span className="text-sm text-muted-foreground flex truncate overflow-ellipsis">
                <p className=" font-semibold">
                  {lastMessageSender}
                  {":"}&nbsp;
                </p>
                <p className="truncate overflow-ellipsis">
                  {lastMessageContent}
                </p>
              </span>
            ) : (
              <p className=" text-sm text-muted-foreground truncate">
                Start the conversation!
              </p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
