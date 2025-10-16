import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType } from "../types";
import { User } from "../generated/prisma/client";

const useOtherUser = (
  conversation: FullConversationType | { users: User[] }
) => {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentEmail = session?.data?.user?.email;


    return conversation.users.find((user) => user.email !== currentEmail);
  }, [session?.data?.user?.email, conversation.users]);

  return otherUser; 
};

export default useOtherUser;
