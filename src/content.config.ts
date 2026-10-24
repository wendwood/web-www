import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Text-heavy pages (rules, privacy). The file name is the page's id.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
  }),
});

// One file per event or fundraiser, listed on /events/.
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    // Square payment link, added by the treasurer when the fundraiser opens.
    paymentLink: z.url().optional(),
    // Set when the event has its own page (e.g. an old URL to keep); otherwise it gets /events/<file-name>/.
    page: z.string().startsWith('/').endsWith('/').optional(),
  }),
});

export const collections = { pages, events };
