import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { type AppRouter } from '@/server/api/root';
import superjson from 'superjson';
import { createClient } from '@/lib/supabase/client';

const supabase = createClient();

export const api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: '/api/trpc',
      headers: async () => {
        const { data: { session } } = await supabase.auth.getSession();
        return {
          Authorization: session?.access_token ? `Bearer ${session.access_token}` : '',
        };
      },
    }),
  ],
});