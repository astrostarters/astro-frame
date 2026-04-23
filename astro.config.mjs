import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

export default defineConfig({
  site: "https://eample.com",
  integrations: [react(), mdx(), sitemap(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
