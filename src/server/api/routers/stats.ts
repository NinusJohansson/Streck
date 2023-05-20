
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const statsRouter = createTRPCRouter({

  getStats: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.dryck.findUnique({
      where: {
        id: ctx.session?.user.id
      }
    });
  }),

});
