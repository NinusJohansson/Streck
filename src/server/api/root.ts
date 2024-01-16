import { createTRPCRouter } from "~/server/api/trpc";
import { statsRouter } from "~/server/api/routers/stats";
import { buttonciderRouter, buttonohlRouter, buttonspritRouter, buttontotalRouter} from "./routers/buttonohl";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  stats: statsRouter,
  button: buttonohlRouter,
  ciderbutton: buttonciderRouter,
  spritbutton: buttonspritRouter,
  totalbutton: buttontotalRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
