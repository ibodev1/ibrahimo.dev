import db from '@astrojs/db';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import webVitals from '@astrojs/web-vitals';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ibrahimo.dev',
  integrations: [robotsTxt(), sitemap(), tailwind(), db(), webVitals()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  prefetch: {
    prefetchAll: true
  }
});
