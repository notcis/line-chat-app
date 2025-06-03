import { UploadDropzone } from "@/lib/uploadthing";
import { toast } from "sonner";

export default function Uploader({
  onChange,
  type,
}: {
  onChange: (files: { url: string; name: string }[]) => void;
  type: "image" | "file";
}) {
  return (
    <UploadDropzone
      endpoint={type}
      onClientUploadComplete={(res) => {
        const files = res.map((item) => ({
          url: item.ufsUrl,
          name: item.name,
        }));
        onChange(files);
      }}
      onUploadError={(error: Error) => {
        toast.error(error.message);
      }}
    />
  );
}
