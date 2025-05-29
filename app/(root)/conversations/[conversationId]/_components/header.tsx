import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { CircleArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Header({
  imageUrl,
  name,
}: {
  imageUrl: string | undefined;
  name: string;
}) {
  return (
    <Card className="w-full flex flex-row items-center rounded-lg p-2 justify-between">
      <div className="flex items-center gap-2.5">
        <Link href="/conversations" className="block lg:hidden">
          <CircleArrowLeftIcon />
        </Link>
        <Avatar className="h-8 w-8">
          <AvatarImage src={imageUrl} />
          <AvatarFallback>{name.substring(0, 1).toUpperCase()}</AvatarFallback>
        </Avatar>
        <h2 className=" font-semibold">{name}</h2>
      </div>
    </Card>
  );
}
