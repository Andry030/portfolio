import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://andry.ink';
  const pages = ['', '/about', '/projects', '/experience', '/skills', '/contact'];
  return pages.map(p => ({
    url:        `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === '' ? 'monthly' : 'monthly',
    priority:   p === '' ? 1 : 0.8,
  }));
}
