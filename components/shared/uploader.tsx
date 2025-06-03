import { UploadDropzone } from "@/lib/uploadthing";
import { toast } from "sonner";

export default function Uploader({
  onChange,
  type,
}: {
  onChange: (urls: string[]) => void;
  type: "image" | "file";
}) {
  return (
    <UploadDropzone
      endpoint={type}
      onClientUploadComplete={(res) => onChange(res.map((item) => item.ufsUrl))}
      onUploadError={(error: Error) => {
        toast.error(error.message);
      }}
    />
  );
}
