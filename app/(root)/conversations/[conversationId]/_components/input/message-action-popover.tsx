import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { PlusCircleIcon, SmileIcon } from "lucide-react";
import { SetStateAction } from "react";

export default function MessageActionPopover({
  setEmojiPickerOpen,
}: {
  setEmojiPickerOpen: (value: SetStateAction<boolean>) => void;
}) {
  return (
    <Popover>
      <PopoverContent className="w-full mb-1 flex flex-col gap-2">
        <PopoverClose asChild>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setEmojiPickerOpen(true);
            }}
          >
            <SmileIcon />
          </Button>
        </PopoverClose>
      </PopoverContent>
      <PopoverTrigger asChild>
        <Button size="icon" variant="secondary">
          <PlusCircleIcon />
        </Button>
      </PopoverTrigger>
    </Popover>
  );
}
