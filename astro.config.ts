import db from '@astrojs/db';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import webVitals from '@astrojs/web-vitals';
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
    }),
    webVitals(),
    db()
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    },
    maxDuration: 8
  }),
  vite: {
    server: {
      host: true,
      open: true
    }
  }
});
