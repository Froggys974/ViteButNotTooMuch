import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Removed unused font variables

export const metadata: Metadata = {
  title: "Vite But Not Too Much - Sécurité Routière",
  description:
    "Un site éducatif et moderne dédié à la sécurité routière pour tous les usagers.",
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
    title: "Vite But Not Too Much",
    description:
      "Prévenir, informer et sensibiliser sur les bonnes pratiques de sécurité routière.",
    url: "https://vitebutnottoomuch.com",
    siteName: "Vite But Not Too Much",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vite But Not Too Much",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
    <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ViteButNotTooMuch",
              "url": "https://vitebutnottoomuch.com",
              "alternateName": "VBNTM",
              "publisher": {
                "@type": "Organization",
                "name": "ViteButNotTooMuch",
                "alternateName": "vitebutnot2much",
                "url": "https://vitebutnottoomuch.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://vitebutnottoomuch.com/img/Logo.svg",
                  "width": 300,
                  "height": 60
                },
                "sameAs": [
                  "https://www.instagram.com/vitebutnot2much",
                  "https://www.tiktok.com/@vitebutnott2much",
                  "https://x.com/vitebutnot2much",
                  "https://www.linkedin.com/in/vitebutnott2much/",
                ]
              }
            }),
          }}
        />
      </head>
      <body className="bg-white text-slate-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
