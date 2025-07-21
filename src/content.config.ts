// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content"

// 2. Import loader(s)
import { glob, file } from "astro/loaders"

// 3. Define your collection(s)
const Menu = defineCollection({
  loader: file("src/collections/menu.json", {
    parser: (items) => JSON.parse(items).menuItems,
  }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    url: z.string(),
  }),
})
const Portfolio = defineCollection({
  loader: glob({ pattern: "src/collections/portfolio/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      title2: z.string().optional(),
      description: z.string().optional(),
      date: z.string().optional(),
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string().optional(),
          })
        )
        .min(4)
        .max(6),
      siteURL: z.string().url().optional(),
      achievements: z.array(z.string()).optional(),
    }),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { Menu, Portfolio }
