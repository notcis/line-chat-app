import DesktopNav from "./sidebar/nav/desktop-nav";
import MobileNav from "./sidebar/nav/mobile-nav";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full p-4 flex flex-col lg:flex-row gap-4">
      <MobileNav />
      <DesktopNav />
      <main className="h-[calc(100%-80px)] lg:h-full w-full flex gap-4">
        {children}
      </main>
    </div>
  );
}
