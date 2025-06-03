import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export default function FilePreview({ url }: { url: string }) {
  return (
    <Link href={url} target="_blank">
      <Button variant="destructive">
        <ExternalLinkIcon className="mr-2 h-4 w-4" /> Open File
      </Button>
    </Link>
  );
}
