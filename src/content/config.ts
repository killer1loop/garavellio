import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		tag: z.string(),
		date: z.coerce.date(),
		image: z.string().optional(),
	}),
});

export const collections = { blog };
