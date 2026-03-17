import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://aiordie.now', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://aiordie.now/pricing', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aiordie.now/roles', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aiordie.now/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://aiordie.now/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: 'https://aiordie.now/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ]
}
