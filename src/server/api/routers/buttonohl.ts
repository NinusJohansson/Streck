import { z } from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";


export const buttonohlRouter = createTRPCRouter({
  ohlpress: protectedProcedure.mutation(({ ctx }) => {
    return ctx.prisma.dryck.update({
      where: {
        id: ctx.session?.user.id
      },
      data:{
        ohl: {
          increment: 1
        }
      }
    });
  })
})

export const buttonciderRouter = createTRPCRouter({
  ciderpress: protectedProcedure
  .mutation(async ({ ctx }) => {
    return ctx.prisma.dryck.update({
      where: {
        id: ctx.session?.user.id
      },
      data:{
        cider: {
          increment: 1
        }
      }
    });
    })
})


export const buttonspritRouter = createTRPCRouter({
  spritpress: protectedProcedure
  .mutation(async ({ ctx }) => {
    return ctx.prisma.dryck.update({
      where: {
        id: ctx.session?.user.id
      },
      data:{
        sprit: {
          increment: 1
        }
      }
    });
    })
});