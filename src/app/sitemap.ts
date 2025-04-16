// app/sitemap.ts
import { MetadataRoute } from 'next'
import { readdirSync, existsSync } from 'fs'
import { resolve, join } from 'path'

async function getArticleSlugs(): Promise<string[]> {
  // Chemin corrigé avec src/app/blog
  const blogPath = resolve(process.cwd(), 'src/app/blog')
  
  try {
    const items = readdirSync(blogPath, { withFileTypes: true })
    return items
      .filter(dirent => 
        dirent.isDirectory() && 
        existsSync(join(blogPath, dirent.name, 'page.tsx'))
      )
      .map(dirent => dirent.name)
  } catch (error) {
    console.error('Erreur de lecture du dossier blog:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vitebutnottoomuch.com'

  return [
    // Pages statiques
    ...[
      { url: baseUrl, priority: 1.0 }, // Accueil - priorité maximale
      { url: `${baseUrl}/blog`, priority: 0.9 }, // Section blog
      { url: `${baseUrl}/contact`, priority: 0.7 } // Contact
    ].map(page => ({
      ...page,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const
    })),
    // Articles dynamiques
    ...(await getArticleSlugs()).map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }))
  ]
}
