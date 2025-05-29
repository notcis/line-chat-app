import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function DmConversationItem({
  id,
  username,
  imageUrl,
}: {
  id: string;
  username: string;
  imageUrl: string;
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
            <p className=" text-sm text-muted-foreground truncate">
              Start the conversation!
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
