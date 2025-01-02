import { checkLastAdminPassword } from './utils/admin';
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname;
  const searchParams = new URLSearchParams(context.url.searchParams);
  const pass = searchParams.get('pass');

  const isAdmin = path.startsWith('/admin');
  const hasPassword = typeof pass === 'string' && pass.trim() !== '';
  const passResult = hasPassword && (await checkLastAdminPassword(pass));

  if (isAdmin && !passResult) {
    return context.redirect('/', 301);
  }

  return next();
});
