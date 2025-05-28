import { MessageSquareIcon, UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useNavigation() {
  const pathname = usePathname();

  const paths = useMemo(() => {
    return [
      {
        name: "Conversations",
        href: "/conversations",
        icon: <MessageSquareIcon />,
        active: pathname.startsWith("/conversations"),
      },
      {
        name: "Friends",
        href: "/friends",
        icon: <UserIcon />,
        active: pathname.startsWith("/friends"),
      },
    ];
  }, [pathname]);

  return paths;
}
