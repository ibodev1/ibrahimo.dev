import { generateRandomPassword, upsertAdminPassword } from '@/utils/admin';
import { respond } from '@/utils/helpers';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async (ctx) => {
  try {
    const body = await ctx.request.json();

    if (!body || !body?.password) return respond(400, false, 'Password!');

    const bodyPassword = body.password;

    if (bodyPassword !== import.meta.env.ADMIN_PASS) return respond(402, false, 'Forbidden!');

    const password = generateRandomPassword();

    await upsertAdminPassword(password);

    return respond(200, true, 'Success!', { password });
  } catch (error) {
    return respond(500, false, (error as Error).message);
  }
};
