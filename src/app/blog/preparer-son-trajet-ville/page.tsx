import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment bien préparer son trajet en ville ? | ViteButNotTooMuch",
  description:
    "Découvrez nos conseils pratiques pour anticiper les dangers urbains et circuler en toute sécurité à Paris. Préparez vos trajets sereinement !",
  alternates: {
    canonical: "https://vitebutnottoomuch.com/blog/preparer-son-trajet-ville",
  },
  openGraph: {
    title: "Comment bien préparer son trajet en ville ?",
    description:
      "Conseils pratiques pour anticiper les dangers urbains et circuler en toute sécurité à Paris.",
    url: "https://vitebutnottoomuch.com/blog/preparer-son-trajet-ville",
    siteName: "ViteButNotTooMuch",
    images: [
      {
        url: "https://vitebutnottoomuch.com/img/preparer-trajet-ville.webp",
        width: 1200,
        height: 630,
        alt: "Préparer son trajet en ville",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
};

export default function PreparerSonTrajetVille() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <article className="container mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Comment bien préparer son trajet en ville ?
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Publié le 16 avril 2025 · Par l’équipe ViteButNotTooMuch
        </p>
        <Image
          src="/img/preparer-trajet-ville.webp"
          alt="Préparer son trajet en ville"
          title="Préparer son trajet en ville"
          className="w-full rounded-lg mb-8"
          width={1200}
          height={630}
          loading="lazy"
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Pourquoi bien préparer son trajet urbain ?
        </h2>
        <p className="mb-6 text-gray-700">
          La circulation en ville est souvent synonyme de stress, d’imprévus et
          de dangers potentiels. Que vous soyez automobiliste, cycliste ou
          piéton, anticiper son trajet permet d’éviter bien des désagréments et
          d’arriver à destination en toute sécurité.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Nos conseils pour un trajet serein
        </h2>
        <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            <strong>Planifiez votre itinéraire :</strong> Utilisez des
            applications comme Google Maps ou Waze pour choisir le meilleur
            parcours et éviter les zones encombrées ou en travaux.
          </li>
          <li>
            <strong>Consultez l’état du trafic :</strong> Avant de partir,
            vérifiez les conditions de circulation sur{" "}
            <a
              href="https://www.bison-fute.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Bison Futé
            </a>{" "}
            ou les infos trafic locales.
          </li>
          <li>
            <strong>Préparez votre véhicule :</strong> Vérifiez la pression des
            pneus, le niveau de carburant, et assurez-vous d’avoir tous les
            papiers nécessaires.
          </li>
          <li>
            <strong>Prévoyez une marge :</strong> Partez quelques minutes plus
            tôt pour pallier les imprévus (embouteillages, déviations, etc.).
          </li>
          <li>
            <strong>Restez vigilant :</strong> En ville, la vigilance est de
            mise : attention aux piétons, cyclistes, trottinettes et transports
            en commun.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Astuces pour les usagers doux (vélos, trottinettes, piétons)
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            Privilégiez les itinéraires sécurisés (pistes cyclables, zones
            piétonnes).
          </li>
          <li>Portez des équipements réfléchissants, surtout la nuit.</li>
          <li>Respectez la signalisation et les feux tricolores.</li>
        </ul>

        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-8">
          « Un trajet bien préparé, c’est déjà un trajet sécurisé. »
        </blockquote>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Ressources utiles
        </h2>
        <ul className="list-disc pl-6 mb-4 text-blue-700">
          <li>
            <a
              href="https://www.securite-routiere.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Site officiel de la Sécurité Routière
            </a>
          </li>
          <li>
            <a
              href="https://www.preventionroutiere.asso.fr/liens-utiles/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Association Prévention Routière
            </a>
          </li>
        </ul>

        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            ← Retour au blog
          </a>
        </div>
      </article>
    </main>
  );
}
