import SidebarWrapper from "@/components/shared/sidebar-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarWrapper>{children}</SidebarWrapper>;
}
