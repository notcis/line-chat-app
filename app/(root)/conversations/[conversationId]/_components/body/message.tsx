import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, formatTime } from "@/lib/utils";
import ImagePreview from "./image-preview";
import FilePreview from "./file-preview";
import { Badge } from "@/components/ui/badge";

type Props = {
  formCurrentUser: boolean;
  senderImage: string;
  senderName: string;
  lastByUser: boolean;
  content: string[];
  createAt: Date;
  seen?: React.ReactNode;
  type: string;
  name?: string[];
};

export default function Message({
  formCurrentUser,
  senderImage,
  senderName,
  lastByUser,
  content,
  createAt,
  seen,
  type,
  name,
}: Props) {
  return (
    <div className={cn("flex items-end", { "justify-end": formCurrentUser })}>
      <div
        className={cn("flex flex-col w-full mx-2", {
          "order-1 items-end": formCurrentUser,
          "order-2 items-start": !formCurrentUser,
        })}
      >
        <div
          className={cn("px-4 py-2 rounded-lg max-w-[70%]", {
            "bg-primary text-primary-foreground": formCurrentUser,
            "bg-secondary text-secondary-foreground": !formCurrentUser,
            "rounded-br-none": !lastByUser && formCurrentUser,
            "rounded-bl-none": !lastByUser && !formCurrentUser,
          })}
        >
          {type === "text" ? (
            <p className=" text-wrap break-words whitespace-pre-wrap break-all">
              {content}
            </p>
          ) : null}
          {type === "image" ? (
            <ImagePreview urls={content} names={name} />
          ) : null}
          {type === "file" ? (
            <FilePreview url={content[0]} name={name?.[0]} />
          ) : null}
          {type === "call" ? (
            <Badge variant="secondary">Joined Call</Badge>
          ) : null}
          <p
            className={cn("text-xs flex w-full my-1", {
              "text-primary-foreground justify-end": formCurrentUser,
              "text-secondary-foreground justify-start": !formCurrentUser,
            })}
          >
            {formatTime(createAt)}
          </p>
        </div>
        {seen}
      </div>
      <Avatar
        className={cn(
          "relative w-8 h-8",
          {
            "order-2": formCurrentUser,
            "order-1": !formCurrentUser,
          },
          { invisible: lastByUser }
        )}
      >
        <AvatarImage src={senderImage} />
        <AvatarFallback>
          {senderName.substring(0, 1).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
