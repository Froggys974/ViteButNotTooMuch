import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

// Removed unused font variables

export const metadata: Metadata = {
  metadataBase: new URL("https://vitebutnottoomuch.com"),
  title: {
    default: "ViteButNotTooMuch",
    template: "%s | ViteButNotTooMuch",
  },
  description:
    "ViteButNotTooMuch, le blog sécurité routière à Paris : conseils, prévention, actualités et guides pratiques pour tous.",
  keywords: [
    "ViteButNotTooMuch",
    "sécurité routière",
    "Paris",
    "prévention",
    "blog",
    "conseils",
    "accidents",
    "code de la route",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "ViteButNotTooMuch",
    description:
      "Prévenir, informer et sensibiliser sur les bonnes pratiques de sécurité routière.",
    url: "https://vitebutnottoomuch.com",
    siteName: "ViteButNotTooMuch",
    images: [
      {
        url: "/img/og-image-home.png",
        width: 1200,
        height: 630,
        alt: "ViteButNotTooMuch",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vitebutnott2much",
    creator: "@vitebutnott2much",
    title: "ViteButNotTooMuch – Sécurité routière à Paris",
    description:
      "Conseils, prévention, actualités et guides pratiques pour une route plus sûre à Paris.",
    images: ["/img/og-image-home.png"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <GoogleTagManager
        gtmId="GTM-T3RGP58P" // Replace with your actual GTM ID
        dataLayer={{
          page: {
            url: "https://vitebutnottoomuch.com",
            title: "ViteButNotTooMuch",
          },
        }}
      />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ViteButNotTooMuch",
              url: "https://vitebutnottoomuch.com",
              alternateName: "VBNTM",
              description:
                "ViteButNotTooMuch, le blog référence sur la sécurité routière à Paris : conseils, prévention, actualités, guides pratiques et ressources pour une route plus sûre.",
              publisher: {
                "@type": "Organization",
                name: "ViteButNotTooMuch",
                alternateName: "vitebutnot2much",
                url: "https://vitebutnottoomuch.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://vitebutnottoomuch.com/img/Logo.svg",
                  width: 300,
                  height: 60,
                },
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+33-1-99-00-46-78",
                    contactType: "customer support",
                    areaServed: "FR",
                    availableLanguage: ["French"],
                    email: "contact@vitebutnottoomuch.com",
                  },
                ],
                sameAs: [
                  "https://www.instagram.com/vitebutnot2much",
                  "https://www.tiktok.com/@vitebutnott2much",
                  "https://x.com/vitebutnot2much",
                  "https://www.linkedin.com/in/vitebutnott2much/",
                ],
              },
              inLanguage: "fr-FR",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://vitebutnottoomuch.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-slate-800">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3RGP58P"
            height="0"
            width="0"
            className="gtm-noscript-iframe"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
