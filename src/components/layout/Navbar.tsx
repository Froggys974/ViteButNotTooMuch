"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo & nom */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/img/Logo.svg"
            alt="Logo"
            width={50}
            height={50}
            loading="lazy"
          />
          <span className="text-xl font-semibold text-gray-900 tracking-tight">
            ViteButNotTooMuch
          </span>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Accueil
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
          <Link href="/histoire" className="hover:text-blue-600 transition">
            Notre histoire
          </Link>
          <Link
            href="/mentions-legales"
            className="hover:text-blue-600 transition"
          >
            Mentions légales
          </Link>
        </nav>
        {/* Réseaux sociaux */}
        <div className="hidden md:flex items-center space-x-4 ml-6">
          <a
            href="https://www.instagram.com/vitebutnot2much?igsh=MTl1eHNwd2h3eHBobQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            {/* Instagram SVG */}
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={22}
              height={22}
              loading="lazy"
            />
          </a>
          <a
            href="https://linkedin.com/in/vitebutnott2much"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            {/* LinkedIn SVG */}
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={25}
              height={25}
              loading="lazy"
            />
          </a>
          <a
            href="https://www.tiktok.com/@vitebutnott2much?_t=ZN-8va7KAGIAcA&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-black transition"
          >
            {/* TikTok SVG */}
            <Image
              src="/icons/tiktok.svg"
              alt="TikTok"
              width={20}
              height={20}
              loading="lazy"
            />
          </a>
          <a
            href="https://x.com/vitebutnot2much?s=21&t=vR2g3gxusRmLR8lzFqo2aQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-black transition"
          >
            {/* X (Twitter) SVG */}
            <Image
              src="/icons/x.svg"
              alt="X (Twitter)"
              width={20}
              height={20}
              loading="lazy"
            />
          </a>
        </div>
        {/* Infos contact desktop */}
        <div className="hidden md:flex flex-col items-end text-xs text-gray-400 leading-tight ml-6">
          <a
            href="https://maps.google.com/maps?hl=fr&gl=fr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x47e6738fdc465377:0xa74093d277f6119"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            242 Rue du Faubourg Saint-Antoine, Paris
          </a>
          <a href="tel:0199004678" className="hover:text-blue-600 transition">
            01 99 00 46 78
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center px-2 py-1"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 pt-2 space-y-2 text-gray-700 text-base font-medium">
          <Link href="/" className="block hover:text-blue-600 transition">
            Accueil
          </Link>
          <Link href="/blog" className="block hover:text-blue-600 transition">
            Blog
          </Link>
          <Link
            href="/contact"
            className="block hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <Link
            href="/histoire"
            className="block hover:text-blue-600 transition"
          >
            Notre histoire
          </Link>
          <Link
            href="/mentions-legales"
            className="block hover:text-blue-600 transition"
          >
            Mentions légales
          </Link>
          {/* Réseaux sociaux mobile */}
          <div className="flex items-center space-x-4 mt-2">
            <a
              href="https://www.instagram.com/vitebutnot2much?igsh=MTl1eHNwd2h3eHBobQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              {/* Instagram SVG */}
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={22}
                height={22}
                loading="lazy"
              />
            </a>
            <a
              href="https://linkedin.com/in/vitebutnott2much"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition"
            >
              {/* LinkedIn SVG */}
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={25}
                height={25}
                loading="lazy"
              />
            </a>
            <a
              href="https://www.tiktok.com/@vitebutnott2much?_t=ZN-8va7KAGIAcA&_r=1?_t=ZN-8va7KAGIAcA&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-black transition"
            >
              {/* TikTok SVG */}
              <Image
                src="/icons/tiktok.svg"
                alt="TikTok"
                width={20}
                height={20}
                loading="lazy"
              />
            </a>
            <a
              href="https://x.com/vitebutnot2much?s=21&t=vR2g3gxusRmLR8lzFqo2aQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-black transition"
            >
              {/* X (Twitter) SVG */}
              <Image
                src="/icons/x.svg"
                alt="X (Twitter)"
                width={20}
                height={20}
                loading="lazy"
              />
            </a>
          </div>
          <div className="mt-3 text-xs text-gray-400">
            <a
              href="https://maps.google.com/maps?hl=fr&gl=fr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x47e6738fdc465377:0xa74093d277f6119"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              242 Rue du Faubourg Saint-Antoine, Paris
            </a>
            <br />
            <a href="tel:0199004678" className="hover:text-blue-600 transition">
              01 99 00 46 78
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
