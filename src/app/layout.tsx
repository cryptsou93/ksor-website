import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ksorindustrie.com"),
  title: {
    default:
      "Bureau d'études R&D | Conception 3D, Prototypage | KSOR Industrie",
    template: "%s | KSOR Industrie",
  },
  description:
    "KSOR Industrie, bureau d'études spécialisé en conception 3D, prototypage et R&D industrielle. Expertise en mécanique, électrique et automatisme. Intervention France et International.",
  keywords: [
    "bureau d'études R&D",
    "conception 3D industrielle",
    "prototypage industriel",
    "SolidWorks CATIA V5",
    "R&D industrielle",
    "mécanique électrique automatisme",
    "Langon",
    "développement produit",
    "KSOR Industrie",
    "bureau d'études conception",
  ],
  authors: [{ name: "KSOR Industrie", url: "https://www.ksorindustrie.com" }],
  creator: "KSOR Industrie",
  publisher: "KSOR Industrie",
  alternates: {
    canonical: "https://www.ksorindustrie.com",
    languages: { fr: "https://www.ksorindustrie.com" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.ksorindustrie.com",
    siteName: "KSOR Industrie",
    title:
      "Bureau d'études R&D | Conception 3D, Prototypage | KSOR Industrie",
    description:
      "Bureau d'études spécialisé en conception 3D, prototypage industriel et R&D. Expert SolidWorks, CATIA V5. Intervention France & International.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KSOR Industrie — Bureau d'études R&D Conception 3D Prototypage Industriel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bureau d'études R&D | Conception 3D & Prototypage | KSOR Industrie",
    description:
      "Bureau d'études spécialisé en conception 3D, prototypage industriel et R&D. France & International.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KSOR Industrie",
  description:
    "Bureau d'études R&D spécialisé en conception industrielle 3D, prototypage et développement produit. Expert SolidWorks, CATIA V5, Smarteam, Fusion 360.",
  url: "https://www.ksorindustrie.com",
  logo: "https://www.ksorindustrie.com/LOGO_KSORINDUSTRIE_BLANC.png",
  foundingDate: "2017",
  founder: {
    "@type": "Person",
    name: "KSOR Industrie",
    jobTitle: "Concepteur Industriel",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Langon",
    postalCode: "33210",
    addressCountry: "FR",
  },
  areaServed: ["France", "International", "Europe"],
  email: "contact@ksorindustrie.com",
  telephone: "+33668135171",
  sameAs: ["https://www.linkedin.com/company/ksor-industrie"],
  knowsAbout: [
    "Conception 3D industrielle",
    "SolidWorks",
    "CATIA V5",
    "Smarteam",
    "Fusion 360",
    "Prototypage industriel",
    "R&D industrielle",
    "Automatisme industriel",
    "Mécanique générale",
    "Bureau d'études",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services KSOR Industrie",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conception 3D & 2D",
          description:
            "Modélisation industrielle SolidWorks, CATIA V5, Smarteam, Fusion 360. Mises en plan, cotation ISO.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Innovation & R&D industrielle",
          description:
            "Étude de faisabilité, développement produit, validation matériaux et procédés.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Prototypage industriel",
          description:
            "Du prototype conceptuel au prototype opérationnel en 4 étapes clés.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mécanique, Électrique & Automatisme",
          description:
            "Calcul de structure, schémas électriques, PLC/SCADA — via notre réseau.",
        },
      },
    ],
  },
  serviceType: [
    "Bureau d'études R&D",
    "Conception industrielle 3D",
    "Prototypage industriel",
    "Développement produit",
    "R&D industrielle",
    "Automatisme industriel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
