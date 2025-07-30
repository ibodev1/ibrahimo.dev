import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import deno from '@deno/astro-adapter';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ibrahimo.dev',
  integrations: [
    sitemap({
      customPages: ['https://www.ibrahimo.dev/blog/', 'https://www.ibrahimo.dev/projects/'],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US'
        }
      }
    }),
    robotsTxt({
      sitemap: ['https://www.ibrahimo.dev/sitemap-index.xml', 'https://www.ibrahimo.dev/rss.xml']
    }),
    react()
  ],
  output: 'server',
  adapter: deno(),
  prefetch: false,
  vite: {
    server: {
      host: true,
      open: true
    },
    plugins: [tailwindcss()]
  }
});
