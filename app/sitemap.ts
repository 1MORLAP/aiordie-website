import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { routing } from '@/i18n/routing'

const locales = routing.locales
const staticPaths = ['', '/pricing', '/roles', '/blog', '/audit', '/brand', '/privacy', '/terms']

function withLocale(pathname: string, locale: string) {
  return locale === routing.defaultLocale ? pathname || '/' : `/${locale}${pathname || '/'}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((pathname) => ({
      url: `https://aiordie.now${withLocale(pathname, locale)}`,
      lastModified: new Date(),
      changeFrequency:
        pathname === '' || pathname === '/blog'
          ? 'weekly'
          : pathname === '/pricing' || pathname === '/roles' || pathname === '/audit'
            ? 'monthly'
            : 'yearly',
      priority:
        pathname === ''
          ? 1
          : pathname === '/blog'
            ? 0.7
            : pathname === '/pricing' || pathname === '/roles' || pathname === '/audit'
              ? 0.8
              : pathname === '/privacy' || pathname === '/terms'
                ? 0.5
                : 0.3,
    }))
  )

  const blogPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    getAllPosts().map((post) => ({
      url: `https://aiordie.now${withLocale(`/blog/${post.slug}`, locale)}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  )

  return [...staticPages, ...blogPages]
}
