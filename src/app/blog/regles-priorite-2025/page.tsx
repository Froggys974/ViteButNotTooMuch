// app/blog/regles-priorite-2025/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les nouvelles règles de priorité en 2025 | ViteButNotTooMuch",
  description:
    "Découvrez toutes les nouveautés du code de la route et des règles de priorité en 2025 : limitation à 30 km/h, ZFE, équipements obligatoires, nouvelles sanctions et formation renforcée.",
  alternates: {
    canonical: "https://vitebutnottoomuch.com/blog/regles-priorite-2025",
  },
  openGraph: {
    title: "Les nouvelles règles de priorité en 2025",
    description:
      "Limitation à 30 km/h, ZFE, équipements obligatoires, nouvelles sanctions et formation renforcée : tout savoir sur les règles de priorité en 2025.",
    url: "https://vitebutnottoomuch.com/blog/regles-priorite-2025",
    siteName: "ViteButNotTooMuch",
    images: [
      {
        url: "https://vitebutnottoomuch.com/img/regles-priorite-2025.webp",
        width: 1200,
        height: 630,
        alt: "Nouvelles règles de priorité 2025",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
};

export default function ReglesPriorite2025() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <article className="container mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Les nouvelles règles de priorité en 2025
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Publié le 16 avril 2025 · Par l’équipe ViteButNotTooMuch
        </p>
        <Image
          src="/img/regles-priorite-2025.webp"
          alt="Nouvelles règles de priorité en 2025"
          title="Nouvelles règles de priorité en 2025"
          className="w-full rounded-lg mb-8"
          width={1200}
          height={630}
          loading="lazy"
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Limitation de vitesse généralisée à 30 km/h en ville
        </h2>
        <p className="mb-6 text-gray-700">
          Depuis 2025, la vitesse maximale autorisée dans la majorité des
          centres-villes français est désormais de <strong>30 km/h</strong>.
          Cette mesure vise à réduire le nombre d’accidents, améliorer la
          sécurité des piétons et cyclistes, et favoriser la mobilité douce.
          Certains axes principaux peuvent toutefois conserver une limitation à
          50 km/h selon la signalisation locale.
          <br />
          <span className="text-xs text-blue-700">
            Source :{" "}
            <a
              href="https://www.auto-ecole-verdun.com/nouvelles-regles-code-route-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Auto-école Verdun
            </a>
          </span>
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Zones à faibles émissions (ZFE) : nouvelles restrictions
        </h2>
        <p className="mb-6 text-gray-700">
          Les ZFE (Zones à Faibles Émissions) sont généralisées : à Paris, Lyon,
          Montpellier ou Grenoble, les véhicules Crit’Air 3 sont désormais
          exclus, et seuls les véhicules les moins polluants peuvent circuler
          dans ces zones. La vignette Crit’Air est obligatoire pour circuler et
          stationner dans une ZFE.
          <br />
          <span className="text-xs text-blue-700">
            Source :{" "}
            <a
              href="https://media.roole.fr/transition/territoires/zfe-les-nouvelles-restrictions-de-circulation-en-france-des-le-1er-janvier-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Roole Média
            </a>
          </span>
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Nouvelles obligations pour les poids lourds
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            Installation obligatoire de dispositifs anti-dérives, caméras
            d’angles morts, et systèmes d’alerte de franchissement de ligne.
          </li>
          <li>
            Délai de mise en conformité : 6 mois à compter de l’entrée en
            vigueur.
          </li>
          <li>
            Sanctions : amendes et immobilisation du véhicule en cas de
            non-respect.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Réglementation des trottinettes électriques
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Âge minimum : 16 ans</li>
          <li>
            Équipements obligatoires : casque, gilet réfléchissant, feux avant
            et arrière
          </li>
          <li>
            Circulation interdite sur les trottoirs, autorisée sur pistes
            cyclables et chaussée (max. 25 km/h)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Permis de conduire : évaluation modernisée
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            Intégration des aides à la conduite (freinage automatique d’urgence,
            régulateur adaptatif, aide au stationnement) à l’examen pratique
          </li>
          <li>Module théorique sur les véhicules électriques et hybrides</li>
          <li>
            Accent sur l’anticipation des risques, la gestion du stress et
            l’écoconduite
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Jeunes conducteurs : période probatoire et tolérance zéro alcool
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            Période probatoire : 3 ans, réduite à 2 ans si formation
            complémentaire post-permis
          </li>
          <li>
            Taux d’alcoolémie autorisé : 0,0 g/l pendant toute la période
            probatoire
          </li>
          <li>Sanctions immédiates en cas d’infraction</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Nouvelles signalisations et voies réservées
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            Panneaux spécifiques pour ZFE et voies réservées aux véhicules
            électriques
          </li>
          <li>Contrôle renforcé par caméras de surveillance</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Sanctions renforcées pour infractions graves
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            Excès de vitesse de plus de 50 km/h : suspension automatique du
            permis
          </li>
          <li>Récidive : annulation du permis, obligation de le repasser</li>
          <li>
            Conduite sous stupéfiants : retrait immédiat du permis, peines de
            prison en cas de récidive
          </li>
        </ul>

        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-8">
          « Ces évolutions du code de la route 2025 visent à renforcer la
          sécurité de tous, encourager la mobilité durable et préparer les
          conducteurs aux enjeux de demain. »
        </blockquote>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Ressources officielles
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
              href="https://media.roole.fr/transition/territoires/zfe-les-nouvelles-restrictions-de-circulation-en-france-des-le-1er-janvier-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Roole Média – ZFE 2025
            </a>
          </li>
          <li>
            <a
              href="https://www.auto-ecole-verdun.com/nouvelles-regles-code-route-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Auto-école Verdun – Nouvelles règles 2025
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
