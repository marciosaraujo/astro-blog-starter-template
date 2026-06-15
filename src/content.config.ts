import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
	// Load Markdown files in the `src/content/projects/` directory.
	loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.enum(["infra", "observability", "automation", "platform"]),
		tech: z.array(z.string()),
		repoUrl: z.string().url().optional(),
		demoUrl: z.string().url().optional(),
		featured: z.boolean().default(false),
		coverImage: z.string().optional(),
		date: z.coerce.date(),
	}),
});

export const collections = { projects };
