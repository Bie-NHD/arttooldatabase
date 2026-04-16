import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import itemSchema from "./schemas/item";

const items = defineCollection({
  loader: file("src/data/items.json"),
  schema: itemSchema,
});

export const collections = {
  items,
};
