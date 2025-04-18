import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://vitebutnottoomuch.com/sitemap.xml',
    host: 'https://vitebutnottoomuch.com',
  };
}
