import { auth } from "@/auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async () => {
  const session = await auth();

  if (!session) throw new UploadThingError("Unauthorized");

  return { userId: session.user!.id };
};

export const ourFileRouter = {
  image: f({
    image: {
      maxFileCount: 6,
    },
    video: {
      maxFileCount: 3,
    },
  })
    .middleware(async () => await handleAuth())
    .onUploadComplete(async ({ file }) => {
      console.log("Uploaded:", file.ufsUrl);
    }),
  file: f([
    "image",
    "video",
    "audio",
    "pdf",
    "application/msword", // .doc
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
    "application/vnd.ms-excel", // .xls
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ])
    .middleware(async () => await handleAuth())
    .onUploadComplete(async ({ file }) => {
      console.log("Uploaded:", file.ufsUrl);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
