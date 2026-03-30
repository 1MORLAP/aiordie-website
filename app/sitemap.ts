import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: 'https://aiordie.now', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://aiordie.now/pricing', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aiordie.now/roles', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aiordie.now/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://aiordie.now/audit', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aiordie.now/brand', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://aiordie.now/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: 'https://aiordie.now/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ]

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `https://aiordie.now/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
