// app/politique-confidentialite/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Découvrez notre politique de confidentialité conforme au RGPD, expliquant comment nous collectons, utilisons et protégeons vos données personnelles sur ViteButNotTooMuch.",
  alternates: {
    canonical: "https://vitebutnottoomuch.com/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <section className="container mx-auto max-w-3xl bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Politique de confidentialité
        </h1>

        <p className="mb-6 text-gray-700">
          Chez <strong>ViteButNotTooMuch</strong>, nous attachons une grande
          importance à la protection de vos données personnelles. Cette
          politique de confidentialité vous informe sur la manière dont nous
          collectons, utilisons et protégeons vos informations conformément au
          Règlement Général sur la Protection des Données (RGPD).
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          1. Responsable du traitement
        </h2>
        <p className="mb-6 text-gray-700">
          Le responsable du traitement des données est{" "}
          <strong>ViteButNotTooMuch</strong>, dont le siège social est situé au
          242 Rue du Faubourg Saint-Antoine, 75012 Paris.
          <br />
          Pour toute question relative à vos données, vous pouvez nous contacter
          à l’adresse email :{" "}
          <a
            href="mailto:contact@vitebutnottoomuch.com"
            className="text-blue-600 hover:underline"
          >
            contact@vitebutnottoomuch.com
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          2. Données collectées
        </h2>
        <p className="mb-6 text-gray-700">
          Nous collectons uniquement les données personnelles que vous nous
          fournissez volontairement via notre formulaire de contact, notamment :
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Message ou demande</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          3. Finalités du traitement
        </h2>
        <p className="mb-6 text-gray-700">
          Vos données sont utilisées uniquement pour répondre à vos demandes,
          vous fournir les informations ou services demandés, et améliorer notre
          site.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          4. Bases légales
        </h2>
        <p className="mb-6 text-gray-700">
          Le traitement de vos données repose sur votre consentement donné lors
          de la soumission du formulaire, conformément à l’article 6 du RGPD.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          5. Destinataires des données
        </h2>
        <p className="mb-6 text-gray-700">
          Vos données sont accessibles uniquement à l’équipe de
          ViteButNotTooMuch et ne sont pas transmises à des tiers, sauf
          obligation légale.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          6. Durée de conservation
        </h2>
        <p className="mb-6 text-gray-700">
          Les données sont conservées pendant une durée maximale de 3 ans à
          compter de votre dernier contact, conformément aux obligations
          légales.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          7. Vos droits
        </h2>
        <p className="mb-6 text-gray-700">
          Conformément au RGPD, vous disposez des droits suivants sur vos
          données personnelles :
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
          <li>Droit d’accès, de rectification, d’effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit d’opposition</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit de retirer votre consentement à tout moment</li>
          <li>
            Droit d’introduire une réclamation auprès de la CNIL (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.cnil.fr
            </a>
            )
          </li>
        </ul>
        <p className="mb-6 text-gray-700">
          Pour exercer ces droits, contactez-nous par email à{" "}
          <a
            href="mailto:contact@vitebutnottoomuch.com"
            className="text-blue-600 hover:underline"
          >
            contact@vitebutnottoomuch.com
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          8. Cookies et traceurs
        </h2>
        <p className="mb-6 text-gray-700">
          Notre site utilise des cookies essentiels au fonctionnement et des
          outils d’analyse anonymisés pour améliorer votre expérience. Vous
          pouvez gérer vos préférences via la bannière cookies affichée lors de
          votre première visite.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          9. Sécurité des données
        </h2>
        <p className="mb-6 text-gray-700">
          Nous mettons en œuvre des mesures techniques et organisationnelles
          appropriées pour protéger vos données contre tout accès non autorisé,
          altération ou divulgation.
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          10. Modifications de la politique
        </h2>
        <p className="mb-6 text-gray-700">
          Cette politique peut être mise à jour. La date de la dernière mise à
          jour sera indiquée en haut de la page. Nous vous invitons à la
          consulter régulièrement.
        </p>

        <p className="text-gray-500 text-sm text-center mt-12">
          Dernière mise à jour : 16 avril 2025
        </p>
      </section>
    </main>
  );
}
