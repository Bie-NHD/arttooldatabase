import { z } from "astro/zod";
import { LICENSES, PLATFORMS } from "../data/constants";




const itemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.object({
    en: z.string(),
    vi: z.string(),
  }),
  lastUpdated: z.iso.date(),
  latestVersion: z.string().optional(),
  properties: z.object({
    platforms: z.array(z.enum(PLATFORMS)),
    license: z.array(z.enum(LICENSES)),
  }),
  website: z.httpUrl().optional(),
  image: z.string().optional(),
});

export type ItemType = z.infer<typeof itemSchema>;
export default itemSchema;
