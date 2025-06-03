import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
    title: "ViteButNotTooMuch – Sécurité routière à Paris",
    description:
      "Prévenir, informer et sensibiliser sur les bonnes pratiques de sécurité routière à Paris.",
    url: "/",
    siteName: "ViteButNotTooMuch",
    images: [
      {
        url: "/img/og-image-home.png",
        width: 1200,
        height: 630,
        alt: "ViteButNotTooMuch – Sécurité routière à Paris",
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
      <body className="bg-white text-slate-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
