import { createTRPCRouter } from '@/server/api/trpc';
import { userRouter } from '@/server/api/routers/user';
import { businessRouter } from '@/server/api/routers/business';

export const appRouter = createTRPCRouter({
  user: userRouter,
  business: businessRouter,
});

export type AppRouter = typeof appRouter;