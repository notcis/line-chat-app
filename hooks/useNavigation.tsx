import { getConversations } from "@/lib/actions/conversations.action";
import { getFriendCount } from "@/lib/actions/requests.action";
import { COUNT_FRIEND_REQUEST, LIST_CONVERSATIONS } from "@/lib/constants";
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

  const { data: conversations } = useQuery({
    queryKey: [LIST_CONVERSATIONS],
    queryFn: getConversations,
  });

  const unseenMessagesCount = useMemo(() => {
    return conversations?.reduce((acc, cur) => acc + cur.unseenCount, 0);
  }, [conversations]);

  const paths = useMemo(() => {
    return [
      {
        name: "Conversations",
        href: "/conversations",
        icon: <MessageSquareIcon />,
        active: pathname.startsWith("/conversations"),
        count: unseenMessagesCount,
      },
      {
        name: "Friends",
        href: "/friends",
        icon: <UsersIcon />,
        active: pathname === "/friends",
        count: data?.requestsCount,
      },
    ];
  }, [pathname, data?.requestsCount, unseenMessagesCount]);

  return paths;
}
