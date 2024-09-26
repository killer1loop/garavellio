import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  image: {
    domains: ['directus.backend.garavelli.io'],
  },
  site: 'https://garavelli.io',
  integrations: [tailwind(), markdoc(), sitemap()]
});