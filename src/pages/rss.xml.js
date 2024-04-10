import { SITE_TITLE, SITE_DESCRIPTION } from '@/consts.ts';
import rss from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: []
  });
}
