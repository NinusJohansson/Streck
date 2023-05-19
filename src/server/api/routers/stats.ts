import { z } from "zod";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const statsRouter = createTRPCRouter({

  getStats: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.dryck.findUnique({
      where: {
        id: ctx.session?.user.id
      }
    });
  }),

});
