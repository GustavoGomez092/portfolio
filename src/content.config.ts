import { defineCollection, z } from "astro:content"
import { glob, file } from "astro/loaders"

const Menu = defineCollection({
  loader: file("src/collections/menu.json", {
    parser: (items) => JSON.parse(items).menuItems,
  }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    url: z.string(),
    offset: z.number().min(0).optional(),
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
      assets: z
        .array(
          z.object({
            src: image().optional(),
            videoSrc: z.string().optional(),
            alt: z.string().optional(),
          })
        )
        .min(4)
        .max(6),
      siteURL: z.string().url().optional(),
      achievements: z
        .array(
          z.object({
            achievement: z.string(),
            URL: z.string().optional(),
          })
        )
        .optional(),
      transparency: z.boolean().optional(),
    }),
})

const Abilities = defineCollection({
  loader: file("src/collections/abilities.json", {
    parser: (items) => JSON.parse(items).abilities,
  }),
  schema: z.object({
    id: z.string(),
    ability: z.string(),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
    proficiency: z.number().int().min(0).max(100),
  }),
})

export const collections = { Menu, Portfolio, Abilities }
