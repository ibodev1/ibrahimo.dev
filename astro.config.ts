import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ibrahimo.dev',
  integrations: [sitemap(), robotsTxt()],
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true,
    webAnalytics: {
      enabled: true
    },
    maxDuration: 8
  }),
  prefetch: false,
  vite: {
    server: {
      host: true,
      open: true
    },
    plugins: [tailwindcss()]
  }
});
