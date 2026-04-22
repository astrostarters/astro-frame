import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://eample.com",
  integrations: [react(), sitemap(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
  },
});
