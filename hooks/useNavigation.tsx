import { getFriendCount } from "@/lib/actions/users.action";
import { MessageSquareIcon, UsersIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export function useNavigation() {
  const pathname = usePathname();
  const [requestsCount, setRequestsCount] = useState(0);

  const fecthData = async () => {
    const res = await getFriendCount();
    setRequestsCount(res.requestsCount);
  };

  useEffect(() => {
    fecthData();
  }, []);

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
        icon: <UsersIcon />,
        active: pathname === "/friends",
        count: requestsCount,
      },
    ];
  }, [pathname, requestsCount]);

  return paths;
}
