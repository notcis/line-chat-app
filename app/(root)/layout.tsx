import { auth } from "@/auth";
import SidebarWrapper from "@/components/shared/sidebar-wrapper";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }
  return <SidebarWrapper>{children}</SidebarWrapper>;
}
