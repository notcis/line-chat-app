import { getFriendCount } from "@/lib/actions/requests.action";
import { COUNT_FRIEND_REQUEST } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import { MessageSquareIcon, UsersIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useNavigation() {
  const pathname = usePathname();

  const { data } = useQuery({
    queryKey: [COUNT_FRIEND_REQUEST],
    queryFn: getFriendCount,
  });

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
        count: data?.requestsCount,
      },
    ];
  }, [pathname, data?.requestsCount]);

  return paths;
}
