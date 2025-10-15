import { Prisma } from "../generated/prisma/client"

export type FullConversationType = Prisma.ConversationGetPayload<{
  include: {
    users: true;
    messages: {
      include: {
        sender: true;
        seen: true;
      };
    };
  };
}>;