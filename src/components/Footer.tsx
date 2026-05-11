import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Nos Services" },
    { href: "/apropos", label: "À propos" },
    { href: "/reseau", label: "Réseau indépendants" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    "Conception 3D & 2D",
    "Innovation & R&D",
    "Prototypage industriel",
    "Mécanique générale",
    "Électrique & câblage",
    "Automatisme & robotique",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border-dark mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/LOGO_KSORINDUSTRIE_BLANC.png"
                alt="KSOR Industrie — Bureau d'études R&D, conception 3D et prototypage industriel"
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bureau d&apos;études R&amp;D spécialisé en conception industrielle
              et innovation technologique. Basé à Langon (33210), France.
            </p>
            <a
              href="https://www.linkedin.com/in/damien-pinon-58449b30b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>
                  Langon (33210), France
                </span>
              </li>
              <li>
                <a
                  href="mailto:contact@ksorindustrie.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Mail size={16} className="text-primary shrink-0" />
                  contact@ksorindustrie.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33668135171"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <Phone size={16} className="text-primary shrink-0" />
                  +33 6 68 13 51 71
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-dark mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} KSOR Industrie — Tous droits
            réservés
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-gray-300 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-gray-300 transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
