import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre histoire – ViteButNotTooMuch | Sécurité routière à Paris",
  description:
    "Découvrez l’histoire de ViteButNotTooMuch, le blog qui s’engage pour la sécurité routière à Paris et partout en France. Notre mission, nos valeurs et notre évolution.",
  keywords: [
    "ViteButNotTooMuch",
    "histoire ViteButNotTooMuch",
    "sécurité routière Paris",
    "blog sécurité routière",
  ],
  alternates: {
    canonical: "https://vitebutnottoomuch.com/histoire",
  },
  openGraph: {
    title: "Notre histoire – ViteButNotTooMuch",
    description:
      "L’histoire de ViteButNotTooMuch, un blog engagé pour la sécurité routière à Paris. Découvrez notre mission, nos valeurs et notre équipe.",
    url: "https://vitebutnottoomuch.com/histoire",
    siteName: "ViteButNotTooMuch",
    images: [
      {
        url: "https://vitebutnottoomuch.com/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Notre histoire – ViteButNotTooMuch",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function Histoire() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <article className="container mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Notre histoire – ViteButNotTooMuch
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Publié le 17 avril 2025 · Par l’équipe ViteButNotTooMuch
        </p>
        <Image
          src="/img/Logo.svg"
          alt="Logo ViteButNotTooMuch"
          className="w-40 h-40 mx-auto mb-8"
          width={160}
          height={160}
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          ViteButNotTooMuch : une aventure née de la passion pour la sécurité
          routière
        </h2>
        <p className="mb-6 text-gray-700">
          L’histoire de <strong>ViteButNotTooMuch</strong> commence à Paris, au
          cœur du 12<sup>e</sup> arrondissement, avec une équipe passionnée par
          la sécurité routière et le partage d’informations fiables. Face à la
          multiplication des risques sur la route, nous avons voulu créer un
          espace unique, où chaque usager – automobiliste, cycliste, piéton –
          trouve des conseils, des actualités et des ressources pratiques pour
          circuler en toute sécurité.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Pourquoi le nom ViteButNotTooMuch ?
        </h2>
        <p className="mb-6 text-gray-700">
          Le nom <strong>ViteButNotTooMuch</strong> incarne notre philosophie :
          rouler vite, oui, mais jamais au détriment de la prudence et du
          respect des autres. À travers ce nom, nous rappelons que la sécurité
          routière est l’affaire de tous, et que la modération et l’anticipation
          sauvent des vies.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Notre mission
        </h2>
        <p className="mb-6 text-gray-700">
          Depuis notre lancement, <strong>ViteButNotTooMuch</strong> s’est donné
          pour mission de sensibiliser le public aux enjeux de la sécurité
          routière à Paris et partout en France. Notre blog propose des articles
          de fond, des guides pratiques, des témoignages et des analyses des
          nouvelles réglementations. Nous croyons que l’information et la
          prévention sont les clés pour réduire les accidents et améliorer la
          cohabitation sur la route.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Une équipe engagée à Paris
        </h2>
        <p className="mb-6 text-gray-700">
          Basée au 242 Rue du Faubourg Saint-Antoine, notre équipe réunit des
          passionnés de mobilité, des experts en sécurité routière et des
          rédacteurs spécialisés. Ensemble, nous partageons une vision commune :
          faire de <strong>ViteButNotTooMuch</strong> la référence pour tous
          ceux qui veulent s’informer, se former et s’engager pour une route
          plus sûre.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Notre évolution et nos valeurs
        </h2>
        <p className="mb-6 text-gray-700">
          Depuis sa création, <strong>ViteButNotTooMuch</strong> a grandi grâce
          à sa communauté. Nous plaçons l’écoute, la pédagogie et l’innovation
          au cœur de notre démarche. Chaque article, chaque guide, chaque retour
          d’expérience contribue à enrichir notre plateforme et à renforcer
          notre engagement pour la sécurité routière.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          ViteButNotTooMuch et le SEO : visibilité pour la sécurité
        </h2>
        <p className="mb-6 text-gray-700">
          Pour que nos messages touchent le plus grand nombre,{" "}
          <strong>ViteButNotTooMuch</strong> mise sur une stratégie SEO solide.
          Nous optimisons chaque page autour du mot-clé « ViteButNotTooMuch »,
          tout en proposant un contenu de qualité, pertinent et actualisé. Notre
          objectif : faire de <strong>ViteButNotTooMuch</strong> un site
          incontournable sur Google pour toutes les questions liées à la
          sécurité routière à Paris et en France.
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-8">
          « ViteButNotTooMuch : aller vite, mais jamais trop, pour une route
          plus sûre et une ville plus sereine. »
        </blockquote>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            ← Retour à l’accueil
          </Link>
        </div>
      </article>
    </main>
  );
}
