import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export default function FilePreview({
  url,
  name,
}: {
  url: string;
  name?: string;
}) {
  return (
    <Link href={url} target="_blank">
      <Button size="sm" variant="secondary">
        <ExternalLinkIcon className="mr-2 h-4 w-4" />
        {name ? name : "Open File"}
      </Button>
    </Link>
  );
}
