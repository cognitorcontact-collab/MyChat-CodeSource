import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType } from "../types";
import { User } from "../generated/prisma/client";

const useOtherUser = (
    conversation: FullConversationType | {
        users: User[]
}) => {
    const session = useSession();

    const otherUser = useMemo(() => {
        const currentEmail = session?.data?.user?.email;

        const otherUser = conversation.users.filter((user) => user.email == currentEmail);

        return otherUser;
    }, [session?.data?.user?.email, conversation.users])
}

export default useOtherUser;