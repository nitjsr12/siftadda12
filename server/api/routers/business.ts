import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';

export const businessRouter = createTRPCRouter({
  getAll: protectedProcedure
    .input(z.object({
      type: z.string().optional(),
      location: z.string().optional(),
      status: z.string().optional(),
    }).optional())
    .query(async ({ ctx, input }) => {
      const { data: user } = await ctx.supabase
        .from('profiles')
        .select('role')
        .eq('id', ctx.session.user.id)
        .single();

      let query = ctx.supabase.from('businesses').select('*');
    
      // If not admin, only show own businesses
      if (user?.role !== 'admin') {
        query = query.eq('owner_id', ctx.session.user.id);
      }

      // Apply filters if provided
      if (input?.type) {
        query = query.eq('type', input.type);
      }
      if (input?.location) {
        query = query.eq('location', input.location);
      }
      if (input?.status) {
        query = query.eq('status', input.status);
      }

      const { data: businesses, error } = await query.order('created_at', { ascending: false });

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to fetch businesses',
        });
      }

      return businesses;
    }),

  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const { data: business, error } = await ctx.supabase
        .from('businesses')
        .select('*')
        .eq('id', input)
        .single();

      if (error) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Business not found',
        });
      }

      return business;
    }),

  create: protectedProcedure
    .input(z.object({
      name: z.string(),
      type: z.string(),
      location: z.string(),
      owner_id: z.string().optional(),
      status: z.string().default('active'),
      moves_completed: z.number().default(0),
    }))
    .mutation(async ({ ctx, input }) => {
      const { data: user } = await ctx.supabase
        .from('profiles')
        .select('role')
        .eq('id', ctx.session.user.id)
        .single();

      if (input.owner_id && user?.role !== 'admin') {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'Only admins can create businesses for other users',
        });
      }

      const { data, error } = await ctx.supabase
        .from('businesses')
        .insert({
          ...input,
          owner_id: input.owner_id || ctx.session.user.id,
        })
        .select()
        .single();

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to create business',
        });
      }

      return data;
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      name: z.string().optional(),
      type: z.string().optional(),
      location: z.string().optional(),
      status: z.string().optional(),
      moves_completed: z.number().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { data: user } = await ctx.supabase
        .from('profiles')
        .select('role')
        .eq('id', ctx.session.user.id)
        .single();

      const { id, ...updateData } = input;

      const query = ctx.supabase
        .from('businesses')
        .update(updateData)
        .eq('id', id);

      // If not admin, only allow updating own businesses
      if (user?.role !== 'admin') {
        query.eq('owner_id', ctx.session.user.id);
      }

      const { data, error } = await query.select().single();

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to update business',
        });
      }

      return data;
    }),

  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const { data: user } = await ctx.supabase
        .from('profiles')
        .select('role')
        .eq('id', ctx.session.user.id)
        .single();

      const query = ctx.supabase
        .from('businesses')
        .delete()
        .eq('id', input);

      // If not admin, only allow deleting own businesses
      if (user?.role !== 'admin') {
        query.eq('owner_id', ctx.session.user.id);
      }

      const { error } = await query;

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to delete business',
        });
      }

      return { success: true };
    }),
});