// app/mentions-legales/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | ViteButNotTooMuch",
  description:
    "Mentions légales du site ViteButNotTooMuch : éditeur, hébergeur, propriété intellectuelle, politique de confidentialité et contact.",
  alternates: {
    canonical: "https://vitebutnottoomuch.com/mentions-legales",
  },
};

export default function MentionsLegales() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <section className="container mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Mentions légales
        </h1>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
          Éditeur du site
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>ViteButNotTooMuch</strong>
          <br />
          242 Rue du Faubourg Saint-Antoine, 75012 Paris
          <br />
          Email :{" "}
          <a
            href="mailto:contact@vitebutnottoomuch.com"
            className="text-blue-600 hover:underline"
          >
            contact@vitebutnottoomuch.com
          </a>
          <br />
          Tél :{" "}
          <a href="tel:0199004678" className="text-blue-600 hover:underline">
            01 99 00 46 78
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
          Directeur de la publication
        </h2>
        <p className="text-gray-700 mb-4">
          L’équipe éditoriale de ViteButNotTooMuch.
          <br />
          Pour toute question, contactez-nous à l’adresse ci-dessus.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
          Hébergement
        </h2>
        <p className="text-gray-700 mb-4">
          Ce site est hébergé par :<br />
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
          <br />
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://vercel.com/
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
          Propriété intellectuelle
        </h2>
        <p className="text-gray-700 mb-4">
          L’ensemble des contenus présents sur le site ViteButNotTooMuch
          (textes, images, graphismes, logo, etc.) sont la propriété exclusive
          de l’éditeur, sauf mention contraire. Toute reproduction,
          distribution, modification, adaptation, retransmission ou publication,
          même partielle, de ces différents éléments est strictement interdite
          sans l’accord écrit de ViteButNotTooMuch.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
          Données personnelles & cookies
        </h2>
        <p className="text-gray-700 mb-4">
          Les données personnelles collectées via le formulaire de contact sont
          destinées uniquement à la gestion de vos demandes et ne sont jamais
          transmises à des tiers. Vous disposez d’un droit d’accès, de
          rectification et de suppression de vos données (voir notre{" "}
          <a
            href="/politique-confidentialite"
            className="text-blue-600 hover:underline"
          >
            politique de confidentialité
          </a>
          ).
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
          Liens externes
        </h2>
        <p className="text-gray-700 mb-4">
          Le site ViteButNotTooMuch peut contenir des liens vers d’autres sites.
          L’éditeur ne saurait être tenu responsable du contenu de ces sites
          externes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
          Contact
        </h2>
        <p className="text-gray-700 mb-2">
          Pour toute question, suggestion ou signalement, contactez-nous par
          email à{" "}
          <a
            href="mailto:contact@vitebutnottoomuch.com"
            className="text-blue-600 hover:underline"
          >
            contact@vitebutnottoomuch.com
          </a>{" "}
          ou par téléphone au{" "}
          <a href="tel:0199004678" className="text-blue-600 hover:underline">
            01 99 00 46 78
          </a>
          .
        </p>
        <p className="text-gray-500 text-sm mt-8">
          Ce site est un projet fictif réalisé dans le cadre d’un cours sur le
          référencement naturel (SEO). Les informations présentées ici sont
          purement fictives et n’ont aucune valeur légale.
        </p>
      </section>
    </main>
  );
}
