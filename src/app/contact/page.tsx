// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - ViteButNotTooMuch | Blog sécurité routière à Paris",
  description:
    "Contactez l'équipe de ViteButNotTooMuch pour toute question sur la sécurité routière à Paris, suggestions ou partenariats. Nous sommes à votre écoute.",
  keywords: [
    "contact",
    "sécurité routière",
    "Paris",
    "formulaire",
    "partenariat",
  ],
  alternates: {
    canonical: "https://vitebutnottoomuch.com/contact",
  },
  openGraph: {
    title: "Contact - ViteButNotTooMuch",
    description:
      "Contactez notre équipe pour toute question sur la sécurité routière à Paris.",
    url: "https://vitebutnottoomuch.com/contact",
  },
};

export default function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Une question, une suggestion ou un partenariat ? Remplissez le
            formulaire ci-dessous, nous vous répondrons dans les meilleurs
            délais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold mb-2">Adresse</h2>
              <p className="text-gray-600">
                <a
                  href="https://maps.google.com/maps?hl=fr&gl=fr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x47e6738fdc465377:0xa74093d277f6119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  242 Rue du Faubourg Saint-Antoine
                  <br />
                  75012 Paris
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold mb-2">Téléphone</h2>
              <p className="text-gray-600">
                <a
                  href="tel:0199004678"
                  className="hover:text-blue-600 transition"
                >
                  01 99 00 46 78
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold mb-2">Email</h2>
              <p className="text-gray-600">
                <a
                  href="mailto:contact@vitebutnottoomuch.com"
                  className="hover:text-blue-600 transition"
                >
                  contact@vitebutnottoomuch.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Formulaire de contact
            </h2>
            <form action="/api/contact" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre message..."
                  required
                ></textarea>
              </div>
              <div className="flex items-start">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  required
                />
                <label
                  htmlFor="privacy"
                  className="ml-2 block text-sm text-gray-500"
                >
                  J&#39;accepte que mes données soient traitées conformément à
                  la{" "}
                  <a
                    href="/politique-confidentialite"
                    className="text-blue-600 hover:underline"
                  >
                    politique de confidentialité
                  </a>
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition font-medium"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 rounded-xl overflow-hidden h-80 shadow-md">
            <iframe
              title="Carte de notre emplacement"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.6874532003287!2d2.3867714!3d48.8498708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6728f7573703d%3A0x5e134f63bd4f8c8b!2s242%20Rue%20du%20Faubourg%20Saint-Antoine%2C%2075012%20Paris!5e0!3m2!1sfr!2sfr!4v1713361459381!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Backlinks sécurité routière */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Pour des informations officielles sur la sécurité routière,
              consultez également :
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="https://www.securite-routiere.gouv.fr/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Contact Sécurité Routière
              </a>
              <a
                href="https://www.preventionroutiere.asso.fr/nous-contacter/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Prévention Routière
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
