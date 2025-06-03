// app/blog/accidents-route-paris/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Accidents de la route à Paris : comprendre, prévenir, agir | ViteButNotTooMuch",
  description:
    "Analyse des causes d’accidents à Paris, conseils de prévention, évolutions récentes et témoignages pour une route plus sûre en 2025.",
  alternates: {
    canonical: "https://vitebutnottoomuch.com/blog/accidents-route-paris",
  },
  openGraph: {
    title: "Accidents de la route à Paris : comprendre, prévenir, agir",
    description:
      "Statistiques, causes, prévention et solutions pour réduire les accidents de la route à Paris.",
    url: "https://vitebutnottoomuch.com/blog/accidents-route-paris",
    siteName: "ViteButNotTooMuch",
    images: [
      {
        url: "https://vitebutnottoomuch.com/img/accidents-route-paris.webp",
        width: 1200,
        height: 630,
        alt: "Accidents de la route à Paris",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accidents de la route à Paris : comprendre, prévenir, agir",
    description:
      "Statistiques, causes, prévention et solutions pour réduire les accidents de la route à Paris.",
    images: ["https://vitebutnottoomuch.com/img/accidents-route-paris.webp"],
  },
};

export default function AccidentsRouteParis() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <article className="container mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Accidents de la route à Paris : comprendre, prévenir, agir
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Publié le 3 juin 2025 · Par l’équipe ViteButNotTooMuch
        </p>
        <Image
          src="/img/accidents-route-paris.webp"
          alt="Accidents de la route à Paris"
          title="Accidents de la route à Paris"
          className="w-full rounded-lg mb-8"
          width={1200}
          height={630}
          loading="lazy"
        />

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            1. Les chiffres des accidents à Paris
          </h2>
          <p className="mb-6 text-gray-700">
            En 2024, Paris a recensé plus de 2 500 accidents corporels, dont 29
            mortels. Les piétons, cyclistes et utilisateurs de deux-roues
            motorisés restent les plus vulnérables. Les accidents surviennent
            principalement aux intersections, sur les grands boulevards et lors
            des heures de pointe.
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              11 piétons tués, souvent lors de traversées imprudentes ou en
              dehors des passages protégés
            </li>
            <li>
              6 cyclistes décédés, principalement sur des axes partagés avec les
              voitures
            </li>
            <li>
              4 utilisateurs de trottinettes ou deux-roues motorisés impliqués
              dans des accidents graves
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            2. Les principales causes d’accidents
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              <strong>Vitesse excessive ou inadaptée :</strong> même en ville,
              rouler trop vite augmente fortement le risque et la gravité des
              accidents.
            </li>
            <li>
              <strong>Non-respect des priorités :</strong> particulièrement aux
              carrefours et lors des changements de direction.
            </li>
            <li>
              <strong>Distrations au volant :</strong> usage du téléphone, GPS,
              fatigue ou inattention.
            </li>
            <li>
              <strong>Alcool et stupéfiants :</strong> responsables d’environ
              20 % des accidents mortels.
            </li>
            <li>
              <strong>Non-respect des distances de sécurité :</strong> fréquents
              lors des embouteillages.
            </li>
            <li>
              <strong>Conditions météo défavorables :</strong> pluie,
              brouillard, chaussée glissante.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            3. Les usagers les plus exposés
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              <strong>Piétons :</strong> souvent victimes lors de traversées en
              dehors des passages ou à cause d’un manque de visibilité.
            </li>
            <li>
              <strong>Cyclistes et trottinettes :</strong> vulnérables sur les
              axes partagés, notamment face aux angles morts des poids lourds.
            </li>
            <li>
              <strong>Jeunes conducteurs :</strong> moins expérimentés, plus
              exposés aux risques la nuit et lors de sorties festives.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            4. Les mesures de prévention renforcées à Paris
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              Généralisation des zones 30 et limitation à 50 km/h sur les grands
              axes
            </li>
            <li>
              Suppression des places de stationnement devant les passages
              piétons
            </li>
            <li>Création de nouvelles pistes cyclables et zones piétonnes</li>
            <li>
              Contrôles renforcés sur l’alcoolémie et l’usage du téléphone au
              volant
            </li>
            <li>
              Installation de radars urbains et de caméras de surveillance
            </li>
            <li>
              Campagnes régulières de sensibilisation dans les écoles et
              entreprises
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            5. Conseils pratiques pour éviter les accidents
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              Adaptez toujours votre vitesse aux conditions de circulation et à
              la météo
            </li>
            <li>
              Gardez une distance de sécurité suffisante avec le véhicule qui
              vous précède
            </li>
            <li>
              Anticipez les traversées piétonnes et ralentissez à l’approche des
              écoles
            </li>
            <li>Évitez toute distraction au volant ou au guidon</li>
            <li>
              Respectez la signalisation et les priorités, même si la route
              semble dégagée
            </li>
            <li>
              Portez des équipements réfléchissants la nuit ou par mauvais temps
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            6. Innovations pour la sécurité routière à Paris
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Déploiement de feux avec décompteurs pour piétons</li>
            <li>Panneaux lumineux signalant les excès de vitesse</li>
            <li>Voies réservées aux bus, taxis et mobilités douces</li>
            <li>
              Applications mobiles pour signaler les dangers en temps réel
            </li>
            <li>
              Éducation routière renforcée dans les établissements scolaires
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            7. Témoignages et retours d’expérience
          </h2>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-8">
            « J’ai été victime d’un accident en traversant hors passage piéton,
            maintenant je fais toujours attention et j’incite mes enfants à
            respecter les feux. »
            <br />
            <span className="text-xs">
              — Marie, Paris 20<sup>e</sup>
            </span>
          </blockquote>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-8">
            « La création des pistes cyclables a amélioré la sécurité, mais
            certains automobilistes ne respectent pas encore les priorités. »
            <br />
            <span className="text-xs">— Thomas, cycliste à Paris</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            8. Ressources officielles et liens utiles
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
                href="https://www.paris.fr/pages/la-securite-routiere-a-paris-282"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Ville de Paris – Sécurité routière
              </a>
            </li>
            <li>
              <a
                href="https://www.onisr.securite-routiere.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ONISR – Statistiques accidents
              </a>
            </li>
          </ul>
        </section>

        <section>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-8">
            « Chaque accident est un accident de trop. Prévenir, c’est agir pour
            la sécurité de tous. »
          </blockquote>
        </section>

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
