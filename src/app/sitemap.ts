import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://example.com'
  return [
    { url: `${base}/ru`, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/ar`, changeFrequency: 'monthly', priority: 1 },
  ]
}
