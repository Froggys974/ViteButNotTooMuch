// app/page.jsx ou pages/index.js
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://vitebutnottoomuch.com"),
  title: "Accueil – ViteButNotTooMuch | Blog sécurité routière à Paris",
  description:
    "ViteButNotTooMuch, blog expert sur la sécurité routière à Paris : conseils, prévention, actualités, guides pratiques et ressources pour une route plus sûre.",
  keywords: [
    "sécurité routière",
    "Paris",
    "prévention",
    "blog",
    "conseils",
    "accidents",
    "code de la route",
  ],
  alternates: {
    canonical: "https://vitebutnottoomuch.com/",
  },
  openGraph: {
    title: "ViteButNotTooMuch – Sécurité routière à Paris",
    description:
      "Conseils, prévention, actualités et guides pratiques pour une route plus sûre à Paris.",
    url: "https://vitebutnottoomuch.com/",
    siteName: "ViteButNotTooMuch",
    images: [
      {
        url: "/public/img/Logo.svg",
        width: 1200,
        height: 630,
        alt: "ViteButNotTooMuch – Sécurité routière à Paris",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ViteButNotTooMuch – Sécurité routière à Paris",
    description:
      "Conseils, prévention, actualités et guides pratiques pour une route plus sûre à Paris.",
    images: ["/public/img/Logo.svg"],
  },
};

export default function Home() {
  return (
    <>
      <main className="bg-gray-50 min-h-screen pb-16">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              ViteButNotTooMuch
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              Le blog sécurité routière à Paris
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
              Conseils, prévention, actualités et guides pratiques pour tous les
              usagers de la route. Notre mission : rendre la route plus sûre
              pour tous, à Paris et partout en France.
            </p>
            <a
              href="/blog"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Lire nos articles
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Pourquoi ViteButNotTooMuch ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
              <svg
                className="mx-auto mb-4 w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M13 16h-1v-4h-1m4 4v-1a4 4 0 0 0-8 0v1m8 0a4 4 0 0 0-8 0m8 0H5m14 0h-1a4 4 0 0 0-8 0H5"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">Prévention</h3>
              <p className="text-gray-600">
                Des conseils pratiques pour réduire les risques d’accident et
                adopter les bons réflexes.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
              <svg
                className="mx-auto mb-4 w-12 h-12 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <h3 className="text-xl font-bold mb-2">Actualités</h3>
              <p className="text-gray-600">
                Restez informé des dernières évolutions de la réglementation
                routière à Paris et en France.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
              <svg
                className="mx-auto mb-4 w-12 h-12 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">Communauté</h3>
              <p className="text-gray-600">
                Partagez vos expériences et échangez avec d’autres usagers de la
                route responsables.
              </p>
            </div>
          </div>
        </section>

        {/* Derniers articles (exemple) */}
        <section className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            Derniers articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition">
              <Image
                className="rounded-t-lg h-48 w-full object-cover"
                src="/img/article1.jpg"
                alt="Préparer son trajet en ville"
                width={24}
                height={24}
              />
              <div className="p-5">
                <a href="/blog/preparer-son-trajet-ville">
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    Comment bien préparer son trajet en ville ?
                  </h3>
                </a>
                <p className="mb-3 text-gray-700">
                  Découvrez nos astuces pour anticiper les dangers urbains et
                  circuler en toute sécurité.
                </p>
                <a
                  href="/blog/preparer-son-trajet-ville"
                  className="inline-flex items-center text-blue-600 hover:underline font-medium"
                >
                  Lire l’article
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* Répète ce bloc pour d’autres articles */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition">
              <Image
                className="rounded-t-lg h-48 w-full object-cover"
                src="/img/article2.jpg"
                alt="Règles de priorité 2025"
                width={24}
                height={24}
              />
              <div className="p-5">
                <a href="/blog/regles-priorite-2025">
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    Les nouvelles règles de priorité en 2025
                  </h3>
                </a>
                <p className="mb-3 text-gray-700">
                  Mettez-vous à jour sur les dernières évolutions du code de la
                  route à Paris et en France.
                </p>
                <a
                  href="/blog/regles-priorite-2025"
                  className="inline-flex items-center text-blue-600 hover:underline font-medium"
                >
                  Lire l’article
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition">
              <Image
                className="rounded-t-lg h-48 w-full object-cover"
                src="/img/article3.jpg"
                alt="Sécurité des piétons"
                width={24}
                height={24}
              />
              <div className="p-5">
                <a href="/blog/securite-pietons">
                  <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    Sécurité des piétons : les bons gestes
                  </h3>
                </a>
                <p className="mb-3 text-gray-700">
                  Nos conseils pour protéger les piétons et partager la route en
                  toute sécurité.
                </p>
                <a
                  href="/blog/securite-pietons"
                  className="inline-flex items-center text-blue-600 hover:underline font-medium"
                >
                  Lire l’article
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/blog"
              className="text-blue-700 font-semibold hover:underline"
            >
              Voir tous les articles
            </a>
          </div>
        </section>

        {/* Backlinks sécurité routière */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Ressources officielles sur la sécurité routière
          </h2>
          <ul className="flex flex-wrap gap-6 text-sm text-blue-700">
            <li>
              <a
                href="https://www.securite-routiere.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Sécurité Routière (site officiel)
              </a>
            </li>
            <li>
              <a
                href="https://www.preventionroutiere.asso.fr/liens-utiles/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Prévention Routière
              </a>
            </li>
            <li>
              <a
                href="https://www.bison-fute.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Bison Futé
              </a>
            </li>
            <li>
              <a
                href="https://www.onisr.securite-routiere.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                ONISR
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
