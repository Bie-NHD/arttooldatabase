import { z } from 'astro/zod';

const _platforms = ['Windows', 'macOS', 'Linux', 'Android', 'iOS', 'Browser', 'Other'] as const;
const _licenses = ['Free', 'Freemium', 'Subscription', 'Lifetime', 'Open Source', 'Other'] as const;

const itemSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.object({
        en: z.string(),
        vi: z.string()
    }),
    lastUpdated: z.iso.date(),
    latestVersion: z.string().optional(),
    properties: z.object({
        platforms: z.array(z.enum(_platforms)),
        license: z.array(z.enum(_licenses)),
    }),
    website: z.httpUrl().optional(),
    image: z.string().optional(),
});

export type ItemType = z.infer<typeof itemSchema>;
export default itemSchema;