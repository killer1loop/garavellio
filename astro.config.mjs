import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  site: 'https://garavelli.io',
  integrations: [tailwind(), markdoc(), sitemap()]
});