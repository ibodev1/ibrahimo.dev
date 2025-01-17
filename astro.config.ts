import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ibrahimo.dev',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
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
    }
  }
});
