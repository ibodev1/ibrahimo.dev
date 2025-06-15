import sitemap from '@astrojs/sitemap';
import deno from '@deno/astro-adapter';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ibrahimo.dev',
  integrations: [sitemap(), robotsTxt()],
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
