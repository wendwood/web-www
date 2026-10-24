import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wendwoodpool.com',
  trailingSlash: 'always',
  // External stylesheets only, so the CSP in public/_headers needs no 'unsafe-inline'.
  build: { inlineStylesheets: 'never' },
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
});
