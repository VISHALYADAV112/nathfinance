import type { MetadataRoute } from 'next';
import { services } from '@/data/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://nathfinancialsolutions.com';
  const locales = ['en','hi','mr'];
  const staticPages = ['', '/about', '/contact', '/privacy-policy', '/terms', '/disclaimer'];
  return locales.flatMap(locale => [
    ...staticPages.map(path => ({ url: `${base}/${locale}${path}`, lastModified: new Date() })),
    ...services.map(service => ({ url: `${base}/${locale}/services/${service.slug}`, lastModified: new Date() }))
  ]);
}
