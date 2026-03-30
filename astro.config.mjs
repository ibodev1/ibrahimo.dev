// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ibrahimo.dev",
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ["ibrahimo.dev", "www.ibrahimo.dev"],
    },
  },
});
