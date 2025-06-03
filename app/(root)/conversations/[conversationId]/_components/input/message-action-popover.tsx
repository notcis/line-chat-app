"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { PlusCircleIcon, SmileIcon } from "lucide-react";
import { SetStateAction, useState } from "react";
import UploadFileDailog from "../dialogs/upload-file-dailog";

export default function MessageActionPopover({
  setEmojiPickerOpen,
}: {
  setEmojiPickerOpen: (value: SetStateAction<boolean>) => void;
}) {
  const [uploadFileDialogOpen, setUploadFileDialogOpen] = useState(false);
  const [uploadImageDialogOpen, setUploadImageDialogOpen] = useState(false);

  return (
    <Popover>
      <PopoverContent className="w-full mb-1 flex flex-col gap-2">
        <UploadFileDailog
          open={uploadFileDialogOpen}
          toggle={(newState) => setUploadFileDialogOpen(newState)}
          type="file"
        />
        <UploadFileDailog
          open={uploadImageDialogOpen}
          toggle={(newState) => setUploadImageDialogOpen(newState)}
          type="image"
        />
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
