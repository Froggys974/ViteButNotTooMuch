import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-300 py-10 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Bloc identité & contact */}
        <div className="text-gray-800 text-sm font-light space-y-1">
          <div className="font-semibold text-base text-gray-900">
            ViteButNotTooMuch
          </div>
          <div>
            <a
              href="https://maps.google.com/maps?hl=fr&gl=fr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x47e6738fdc465377:0xa74093d277f6119"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition"
            >
              242 Rue du Faubourg Saint-Antoine, Paris
            </a>
          </div>
          <div>
            Tél :{" "}
            <a href="tel:0199004678" className="hover:text-blue-900 transition">
              01 99 00 46 78
            </a>
          </div>
          <div>
            Email :{" "}
            <a
              href="mailto:contact@vitebutnottoomuch.com"
              className="hover:text-blue-900 transition"
            >
              contact@vitebutnottoomuch.com
            </a>
          </div>
          <div className="pt-2 text-xs text-gray-700">
            © {new Date().getFullYear()} ViteButNotTooMuch. Tous droits
            réservés.
          </div>
        </div>
        {/* Navigation + réseaux sociaux (responsive) */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <nav className="flex flex-wrap items-center justify-center gap-6 text-gray-700 text-sm">
            <Link href="/" className="hover:text-blue-900 transition">
              Accueil
            </Link>
            <Link href="/blog" className="hover:text-blue-900 transition">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-blue-900 transition">
              Contact
            </Link>
            <Link href="/histoire" className="hover:text-blue-900 transition">
              Notre histoire
            </Link>
            <Link
              href="/mentions-legales"
              className="hover:text-blue-900 transition"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-blue-900 transition"
            >
              Confidentialité
            </Link>
          </nav>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a
              href="https://www.instagram.com/vitebutnot2much?igsh=MTl1eHNwd2h3eHBobQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-700 transition"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={22}
                height={22}
              />
            </a>
            <a
              href="https://linkedin.com/in/vitebutnott2much"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-900 transition"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={25}
                height={25}
              />
            </a>
            <a
              href="https://www.tiktok.com/@vitebutnott2much?_t=ZN-8va7KAGIAcA&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-black transition"
            >
              <Image
                src="/icons/tiktok.svg"
                alt="TikTok"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://x.com/vitebutnot2much?s=21&t=vR2g3gxusRmLR8lzFqo2aQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-black transition"
            >
              <Image
                src="/icons/x.svg"
                alt="X (Twitter)"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
        {/* Backlinks sécurité routière */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-gray-700 text-xs">
          <span className="font-medium text-gray-900">Ressources :</span>
          <a
            href="https://www.securite-routiere.gouv.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition"
          >
            Sécurité Routière
          </a>
          <a
            href="https://www.preventionroutiere.asso.fr/liens-utiles/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition"
          >
            Prévention Routière
          </a>
          <a
            href="https://www.bison-fute.gouv.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900 transition"
          >
            Bison Futé
          </a>
        </div>
      </div>
    </footer>
  );
}
