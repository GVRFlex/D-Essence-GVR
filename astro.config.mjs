import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import vercelAnalytics from "@vercel/analytics/astro";

export default defineConfig({
  site: 'https://www.d-essencewellness.com',
  output: 'static',
  trailingSlash: 'always',
  alias: { '@': '/src' },

  integrations: [
    sitemap(),
    vercelAnalytics() // <-- Analytics activado
  ],

  adapter: vercel()
});
