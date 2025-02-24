import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    techStack: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    slug: z.string(),  
  }),
});

export const collections = {
  projects: projectsCollection,
};