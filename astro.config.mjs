import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://ibrahimo.dev",
  integrations: [mdx(), robotsTxt(), sitemap(), tailwind()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  prefetch: {
    prefetchAll: true
  }
});