"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos Services" },
  { href: "/apropos", label: "À propos" },
  { href: "/reseau", label: "Réseau indépendants" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border-dark">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/LOGO_KSORINDUSTRIE_BLANC.png"
              alt="KSOR Industrie — Bureau d'études R&D, conception 3D et prototypage industriel"
              width={120}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "px-3 py-2 rounded text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="ml-4">
              <Link href="/contact" className="btn-primary text-sm py-2">
                Demander un devis
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border-dark py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={clsx(
                      "block px-4 py-3 rounded text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-4 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
