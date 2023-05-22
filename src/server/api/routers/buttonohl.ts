import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";


export const buttonohlRouter = createTRPCRouter({
  ohlpress: protectedProcedure
  .input(z.number({
  }))
  .mutation(({ ctx, input }) => {
    return ctx.prisma.user.update({
      where: {
        id: ctx.session?.user.id
      },
      data:{
        ohl: {
          increment: input
        }
      }
    });
  })
})

export const buttonciderRouter = createTRPCRouter({
  ciderpress: protectedProcedure
  .input(z.number({
  }))
  .mutation(async ({ ctx, input }) => {
    return ctx.prisma.user.update({
      where: {
        id: ctx.session?.user.id
      },
      data:{
        cider: {
          increment: input
        }
      }
    });
    })
})


export const buttonspritRouter = createTRPCRouter({
  spritpress: protectedProcedure
  .input(z.number({
    }))
  .mutation(async ({ input,ctx }) => {
    return ctx.prisma.user.update({
      where: {
        id: ctx.session?.user.id
      },
      data:{
        sprit:{
          increment: input
        } 
      }
    });
    }),
});