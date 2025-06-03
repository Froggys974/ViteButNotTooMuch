import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog – Sécurité routière à Paris",
  description:
    "ViteButNotTooMuch, le blog sécurité routière à Paris : conseils, prévention, actualités et guides pratiques pour tous.",
  alternates: {
    canonical: "https://vitebutnottoomuch.com/blog",
  },
  openGraph: {
    title: "Blog – ViteButNotTooMuch",
    description:
      "Articles, conseils et actualités sur la sécurité routière à Paris.",
    url: "https://vitebutnottoomuch.com/blog",
    siteName: "ViteButNotTooMuch",
    locale: "fr_FR",
    type: "website",
  },
};

// Tableau d'articles (à remplacer par une source dynamique si besoin)
const articles = [
  {
    slug: "preparer-son-trajet-ville",
    title: "Comment bien préparer son trajet en ville ?",
    excerpt:
      "Découvrez nos conseils pratiques pour anticiper les dangers urbains et circuler en toute sécurité à Paris.",
    image: "/img/preparer-trajet-ville.webp",
    date: "2025-04-16",
  },
  {
    slug: "regles-priorite-2025",
    title: "Les nouvelles règles de priorité en 2025",
    excerpt:
      "Mettez-vous à jour sur les dernières évolutions du code de la route à Paris et en France.",
    image: "/img/regles-priorite-2025.webp",
    date: "2025-04-16",
  },
  {
    slug: "securite-pietons",
    title: "Sécurité des piétons : les bons gestes",
    excerpt:
      "Nos conseils pour protéger les piétons et partager la route en toute sécurité.",
    image: "/img/securite-pietons.webp",
    date: "2025-04-16",
  },
  {
    slug: "securite-routiere-paris-2025",
    title:
      "La sécurité routière à Paris : enjeux, innovations et bonnes pratiques pour 2025",
    excerpt:
      "Découvrez un dossier complet sur la sécurité routière à Paris en 2025 : chiffres, nouveaux dispositifs, innovations, conseils pratiques et enjeux pour tous les usagers.",
    image: "/img/securite-routiere-paris-2025.webp",
    date: "2025-06-03",
  },
  {
    slug: "mobilites-douces-paris",
    title: "Mobilités douces à Paris : comment cohabiter en sécurité ?",
    excerpt:
      "Découvrez comment piétons, cyclistes, trottinettes et automobilistes peuvent partager la route à Paris en toute sécurité. Conseils, réglementations et innovations pour une mobilité apaisée.",
    image: "/img/mobilites-douces-paris.webp",
    date: "2025-06-03",
  },
  {
    slug: "accidents-route-paris-2025",
    title: "Accidents de la route à Paris : comprendre, prévenir, agir",
    excerpt:
      "Analyse des causes d’accidents à Paris, conseils de prévention, évolutions récentes et témoignages pour une route plus sûre en 2025.",
    image: "/img/accidents-route-paris.webp",
    date: "2025-06-03",
  },
  // ... Ajoute d'autres articles ici
];

export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <section className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
          Notre blog sécurité routière
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <Link href={`/blog/${article.slug}`}>
                <Image
                  src={article.image}
                  alt={article.title}
                  title={article.title}
                  className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
                  width={600}
                  height={400}
                />
              </Link>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold mb-2 text-gray-900">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-blue-600 transition"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 flex-1 mb-4">{article.excerpt}</p>
                <div className="text-xs text-gray-400 mb-4">
                  {new Date(article.date).toLocaleDateString("fr-FR")}
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition text-center"
                >
                  Lire l’article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
