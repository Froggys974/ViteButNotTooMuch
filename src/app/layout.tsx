import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Removed unused font variables

export const metadata: Metadata = {
  title: "Vite But Not Too Fast - Sécurité Routière",
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
    title: "Vite But Not Too Fast",
    description:
      "Prévenir, informer et sensibiliser sur les bonnes pratiques de sécurité routière.",
    url: "https://vitebutnottoofast.com",
    siteName: "Vite But Not Too Fast",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vite But Not Too Fast",
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
      <body className="bg-white text-slate-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
