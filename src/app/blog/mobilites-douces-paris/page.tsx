import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Mobilités douces à Paris : comment cohabiter en sécurité ? | ViteButNotTooMuch",
  description:
    "Découvrez comment piétons, cyclistes, trottinettes et automobilistes peuvent partager la route à Paris en toute sécurité. Conseils, réglementations et innovations pour une mobilité apaisée.",
  alternates: {
    canonical: "https://vitebutnottoomuch.com/blog/mobilites-douces-paris",
  },
  openGraph: {
    title: "Mobilités douces à Paris : comment cohabiter en sécurité ?",
    description:
      "Conseils, réglementations et innovations pour une mobilité apaisée et sûre à Paris.",
    url: "https://vitebutnottoomuch.com/blog/mobilites-douces-paris",
    siteName: "ViteButNotTooMuch",
    images: [
      {
        url: "https://vitebutnottoomuch.com/img/mobilites-douces-paris.webp",
        width: 1200,
        height: 630,
        alt: "Mobilités douces à Paris",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobilités douces à Paris : comment cohabiter en sécurité ?",
    description:
      "Conseils, réglementations et innovations pour une mobilité apaisée et sûre à Paris.",
    images: ["https://vitebutnottoomuch.com/img/mobilites-douces-paris.webp"],
  },
};

export default function MobilitesDoucesParis() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <article className="container mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Mobilités douces à Paris : comment cohabiter en sécurité ?
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Publié le 3 juin 2025 · Par l’équipe ViteButNotTooMuch
        </p>
        <Image
          src="/img/mobilites-douces-paris.webp"
          alt="Mobilités douces à Paris"
          title="Mobilités douces à Paris"
          className="w-full rounded-lg mb-8"
          width={1200}
          height={630}
          loading="lazy"
        />

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Introduction : Paris, capitale des mobilités douces
          </h2>
          <p className="mb-6 text-gray-700">
            Depuis plusieurs années, Paris s’est engagée dans une transformation
            profonde de son espace public pour favoriser les mobilités douces.
            Vélos, trottinettes, marche à pied, rollers, skateboards : la
            capitale est devenue un laboratoire à ciel ouvert pour la mobilité
            urbaine durable. Mais cette diversité de modes de déplacement pose
            aussi de nouveaux défis en matière de sécurité et de cohabitation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            1. L’essor des mobilités douces à Paris
          </h2>
          <p className="mb-6 text-gray-700">
            Le nombre de cyclistes a doublé à Paris entre 2019 et 2024, selon la
            Ville de Paris. Les trottinettes électriques, en libre-service ou
            privées, se sont imposées comme un mode de déplacement rapide et
            flexible, notamment chez les jeunes actifs. La marche à pied reste
            le mode de déplacement le plus utilisé, représentant plus de 50 %
            des trajets intra-muros.
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Plus de 1 100 km de pistes cyclables et voies partagées</li>
            <li>
              Des zones piétonnes en expansion, notamment dans le centre de
              Paris
            </li>
            <li>
              Des journées régulières sans voiture pour encourager la mobilité
              douce
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            2. Les enjeux de la cohabitation
          </h2>
          <p className="mb-6 text-gray-700">
            La multiplication des modes de transport rend la cohabitation
            parfois complexe. Les conflits d’usage entre piétons, cyclistes,
            trottinettes et automobilistes sont fréquents, surtout aux heures de
            pointe ou sur les axes très fréquentés.
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Partage de la voirie : comment éviter les conflits ?</li>
            <li>Risques accrus aux intersections et aux abords des écoles</li>
            <li>Stationnement sauvage des trottinettes et vélos</li>
            <li>Respect des priorités et des feux tricolores</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            3. Réglementations et bonnes pratiques pour chaque usager
          </h2>
          <h3 className="text-lg font-bold mt-6 mb-2 text-gray-800">
            Pour les cyclistes
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Respecter les pistes cyclables et la signalisation</li>
            <li>Portez un casque, surtout pour les enfants</li>
            <li>Utilisez des feux avant/arrière et des réflecteurs</li>
            <li>Signalez vos changements de direction</li>
            <li>Ne roulez jamais sur les trottoirs</li>
          </ul>
          <h3 className="text-lg font-bold mt-6 mb-2 text-gray-800">
            Pour les utilisateurs de trottinettes
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Âge minimum : 16 ans pour les trottinettes électriques</li>
            <li>Vitesse limitée à 25 km/h</li>
            <li>Interdiction de circuler sur les trottoirs</li>
            <li>Stationnez dans les zones dédiées</li>
            <li>Portez un casque et un gilet réfléchissant la nuit</li>
          </ul>
          <h3 className="text-lg font-bold mt-6 mb-2 text-gray-800">
            Pour les piétons
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Utilisez les passages piétons et respectez les feux</li>
            <li>
              Restez attentif aux vélos et trottinettes sur les voies partagées
            </li>
            <li>Ne traversez jamais entre deux véhicules stationnés</li>
            <li>Accompagnez les enfants et sensibilisez-les aux dangers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            4. Innovations et aménagements pour une meilleure cohabitation
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Création de pistes cyclables séparées et sécurisées</li>
            <li>Zones de rencontre limitées à 20 km/h, priorité aux piétons</li>
            <li>Stationnements dédiés pour trottinettes et vélos</li>
            <li>Signalisation renforcée et marquages au sol innovants</li>
            <li>Déploiement de radars urbains pour contrôler la vitesse</li>
          </ul>
          <p className="mb-6 text-gray-700">
            Paris expérimente également des feux intelligents et des décompteurs
            pour piétons, ainsi que des campagnes de sensibilisation régulières.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            5. Témoignages d’usagers
          </h2>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-8">
            « Depuis la création des nouvelles pistes cyclables, je me sens plus
            en sécurité pour aller au travail à vélo. Mais il reste encore des
            conflits avec les trottinettes sur certaines portions. »
            <br />
            <span className="text-xs">— Julien, cycliste à Paris</span>
          </blockquote>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-8">
            « Les zones piétonnes sont un vrai plus pour les familles, mais il
            faut que les cyclistes et trottinettes respectent mieux les
            priorités. »
            <br />
            <span className="text-xs">
              — Claire, maman du 11<sup>e</sup>
            </span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            6. Conseils pour une cohabitation apaisée
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              Respectez toujours les autres usagers, quelle que soit votre
              mobilité
            </li>
            <li>Adaptez votre vitesse à la densité urbaine</li>
            <li>Restez attentif et anticipez les comportements imprévus</li>
            <li>Participez aux campagnes de sensibilisation locales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            7. Ressources officielles et liens utiles
          </h2>
          <ul className="list-disc pl-6 mb-4 text-blue-700">
            <li>
              <a
                href="https://www.paris.fr/pages/velo-trottinettes-et-autres-mobilites-303"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Ville de Paris – Mobilités douces
              </a>
            </li>
            <li>
              <a
                href="https://www.securite-routiere.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Sécurité Routière – Conseils mobilité
              </a>
            </li>
            <li>
              <a
                href="https://www.preventionroutiere.asso.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Prévention Routière
              </a>
            </li>
          </ul>
        </section>

        <section>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-8">
            « La mobilité douce, c’est l’avenir de Paris. Mais pour que chacun
            en profite, il faut respecter les règles et les autres usagers. »
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
