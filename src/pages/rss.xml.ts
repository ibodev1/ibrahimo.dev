import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/consts.ts';

export const GET: APIRoute = async ({ site }) => {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: site!,
    items: []
  });
};
