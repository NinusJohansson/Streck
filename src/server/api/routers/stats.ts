
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const statsRouter = createTRPCRouter({

  getStats: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findFirst({
      where: {
        id: ctx.session?.user.id
      }
    });
  }),
});