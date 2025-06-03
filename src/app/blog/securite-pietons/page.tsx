// app/blog/securite-pietons/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sécurité des piétons : les bons gestes et les nouveautés à Paris | ViteButNotTooMuch",
  description:
    "Découvrez les nouvelles mesures pour la sécurité des piétons à Paris : suppression des places de stationnement, décompteurs de temps, zones apaisées et conseils pour traverser en toute sécurité.",
  alternates: {
    canonical: "https://vitebutnottoomuch.com/blog/securite-pietons",
  },
  openGraph: {
    title: "Sécurité des piétons : les bons gestes et les nouveautés à Paris",
    description:
      "Suppression des places de stationnement, décompteurs de temps, zones apaisées et conseils pratiques pour mieux protéger les piétons à Paris.",
    url: "https://vitebutnottoomuch.com/blog/securite-pietons",
    siteName: "ViteButNotTooMuch",
    images: [
      {
        url: "https://vitebutnottoomuch.com/img/securite-pietons.webp",
        width: 1200,
        height: 630,
        alt: "Sécurité des piétons à Paris",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
};

export default function SecuritePietons() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <article className="container mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Sécurité des piétons : les bons gestes et les nouveautés à Paris
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Publié le 16 avril 2025 · Par l’équipe ViteButNotTooMuch
        </p>
        <Image
          src="/img/securite-pietons.webp"
          alt="Sécurité des piétons à Paris"
          title="Sécurité des piétons à Paris"
          className="w-full rounded-lg mb-8"
          width={1200}
          height={630}
          loading="lazy"
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Pourquoi renforcer la sécurité des piétons ?
        </h2>
        <p className="mb-6 text-gray-700">
          Les piétons restent les usagers les plus vulnérables de la route. À
          Paris, malgré des progrès, les accidents impliquant des piétons
          restent trop fréquents. En 2024, 11 décès ont été enregistrés en
          seulement six mois dans la capitale, ce qui justifie l’accélération
          des mesures de protection.
          <br />
          <span className="text-xs text-blue-700">
            Source :{" "}
            <a
              href="https://www.leparisien.fr/paris-75/paris-fin-2025-toutes-les-places-de-stationnement-devant-des-passages-pietons-auront-disparu-17-11-2024-CDD6VM2HYVCM7GCU2OOTG6X6P4.php"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Le Parisien
            </a>
          </span>
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Nouvelles mesures à Paris : ce qui change en 2025
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            <strong>
              Suppression des places de stationnement devant les passages
              piétons :
            </strong>{" "}
            D’ici septembre 2025, toutes les places situées à moins de 5 mètres
            des passages cloutés seront supprimées pour améliorer la visibilité
            et la sécurité lors de la traversée.
          </li>
          <li>
            <strong>Décompteurs de temps piéton :</strong> Paris expérimente des
            feux équipés de décompteurs rouges et verts, pour indiquer le temps
            restant avant le changement de feu et permettre aux piétons de
            traverser sereinement.{" "}
            <a
              href="https://www.paris.fr/pages/traversees-pietonnes-la-ville-experimente-un-dispositif-de-decompte-de-temps-pieton-30165"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              En savoir plus
            </a>
          </li>
          <li>
            <strong>Passages piétons sonores :</strong> 300 carrefours équipés
            de dispositifs pour aider les personnes malvoyantes, activables par
            télécommande.
          </li>
          <li>
            <strong>Îlots piétons :</strong> Espaces de protection au milieu de
            la chaussée pour sécuriser les traversées longues.
          </li>
          <li>
            <strong>
              Zones à Trafic Limité (ZTL) et journées sans voiture :
            </strong>{" "}
            Le centre de Paris est régulièrement fermé à la circulation
            motorisée pour apaiser l’espace public et favoriser la marche.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Les bons gestes à adopter pour traverser en sécurité
        </h2>
        <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            Traversez toujours sur les passages piétons et respectez les feux.
          </li>
          <li>
            Avant de traverser, assurez-vous d’être bien vu des conducteurs,
            surtout si des véhicules sont arrêtés près du passage.
          </li>
          <li>Ne traversez jamais entre deux véhicules stationnés.</li>
          <li>
            Restez attentif, même si le feu est vert pour les piétons :
            surveillez les virages et les véhicules qui tournent.
          </li>
          <li>
            Évitez l’utilisation du téléphone ou des écouteurs en traversant.
          </li>
          <li>
            Accompagnez les enfants et sensibilisez-les aux dangers de la rue.
          </li>
        </ol>

        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-8">
          « Un piéton visible et vigilant est un piéton protégé. »
        </blockquote>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Initiatives innovantes à Paris
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>
            <strong>Code de la rue :</strong> Nouvelle réglementation favorisant
            la cohabitation entre tous les usagers, l’élargissement des
            trottoirs et la création de zones piétonnes.
            <br />
            <a
              href="https://www.pieto.eu/2025/02/07/le-code-de-la-rue/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Découvrir le Code de la rue
            </a>
          </li>
          <li>
            <strong>Signalisation innovante :</strong> Marquages au sol
            créatifs, silhouettes de prévention, et panneaux spécifiques pour
            attirer l’attention sur les passages piétons.
          </li>
          <li>
            <strong>Journées sans voiture :</strong> Tous les premiers dimanches
            du mois, plusieurs arrondissements sont réservés aux piétons.
            <br />
            <a
              href="https://www.sortiraparis.com/actualites/a-paris/articles/175623-paris-centre-pieton-les-4-premiers-arrondissements-sans-voiture-dimanche-6-avril-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Voir les prochaines dates
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Ressources officielles et prévention
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
          <li>
            <a
              href="https://www.paris.fr/pages/traversees-pietonnes-la-ville-experimente-un-dispositif-de-decompte-de-temps-pieton-30165"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Décompteurs de temps piéton à Paris
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
