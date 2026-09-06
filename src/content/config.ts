import { defineCollection, z } from "astro:content";

const kadry = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    habitat: z.string().optional(),
    season: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    authorBio: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { kadry };
