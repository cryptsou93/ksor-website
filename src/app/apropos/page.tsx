import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  MapPin,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Wrench,
  Zap,
  Settings,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Expert en Conception Industrielle & Bureau d'études R&D | KSOR Industrie",
  },
  description:
    "KSOR Industrie, bureau d'études R&D fondé par un expert en conception industrielle. 15 ans d'expérience SolidWorks, CATIA V5, prototypage. Langon (33210), France.",
  alternates: {
    canonical: "https://www.ksorindustrie.com/apropos",
  },
  openGraph: {
    title:
      "Expert en Conception Industrielle & Bureau d'études R&D | KSOR Industrie",
    description:
      "Bureau d'études R&D fondé par un expert en conception industrielle avec 15 ans d'expérience. SolidWorks, CATIA V5, prototypage industriel.",
    url: "https://www.ksorindustrie.com/apropos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Expert Conception Industrielle & Bureau d'études R&D | KSOR Industrie",
    description:
      "15 ans d'expérience en conception 3D industrielle, prototypage et R&D. Bureau d'études KSOR Industrie.",
  },
};

const infoCards = [
  {
    icon: Award,
    value: "+15 ans",
    label: "d'expérience dans les plus grands groupes industriels",
  },
  {
    icon: MapPin,
    value: "Langon (33210)",
    label: "Interventions France & International",
  },
  {
    icon: Users,
    value: "Réseau en construction",
    label: "Indépendants BE qualifiés — rejoignez-nous",
  },
];

const networkDomains = [
  {
    icon: Wrench,
    title: "Mécanique",
    description: "Calcul de structure, FEA, dimensionnement",
  },
  {
    icon: Zap,
    title: "Électrique",
    description: "Schémas, câblage, armoires industrielles",
  },
  {
    icon: Settings,
    title: "Automatisme",
    description: "PLC, SCADA, robotique industrielle",
  },
  {
    icon: Layers,
    title: "Conception CAO",
    description: "SolidWorks, CATIA, Smarteam, Fusion 360, mises en plan",
  },
];

const values = [
  {
    icon: Target,
    title: "Rigueur",
    description:
      "Chaque livrable est vérifié, documenté et conforme aux exigences du client.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Approche créative et veille technologique permanente pour des solutions à la pointe.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Relation directe avec notre fondateur. Pas d'intermédiaire, une communication franche.",
  },
  {
    icon: TrendingUp,
    title: "Ambition",
    description:
      "Construire le réseau d'experts BE indépendants de référence en France.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* ── HERO ── fond blanc */}
      <section className="bg-background-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-0.5 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                À propos
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#333333] mb-6">
              L&apos;expertise industrielle
              <br />
              <span className="text-gradient">au service de vos projets</span>
            </h1>
            <p className="text-[#666666] text-lg leading-relaxed">
              KSOR Industrie, bureau d&apos;études fondé par un expert en
              conception industrielle avec 15 ans d&apos;expérience — et la
              vision de construire le réseau d&apos;experts BE de demain.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROFIL ── fond sombre */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Carte profil */}
          <div className="lg:col-span-2">
            <div className="bg-[#162030] rounded-2xl border border-border-dark p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-black text-3xl mx-auto mb-6">
                DP
              </div>
              <h2 className="text-white font-bold text-2xl mb-1">
                Notre fondateur
              </h2>
              <p className="text-primary text-sm font-semibold mb-1">
                Concepteur Industriel
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Fondateur · KSOR Industrie
              </p>
              <div className="border-t border-border-dark pt-6 text-left space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Award size={14} className="text-primary shrink-0" />
                  15 ans d&apos;expérience industrie
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin size={14} className="text-primary shrink-0" />
                  Langon (33210), France
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-white mb-6">Notre parcours</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed mb-10">
              <p>
                Fort d&apos;une solide expérience terrain en conception
                industrielle, avec plus de 15 ans passés au sein des plus
                grands groupes industriels, j&apos;ai créé KSOR Industrie en
                2017 pour proposer une expertise de haut niveau sous une forme
                plus agile et directe.
              </p>
              <p>
                Mon cœur de métier : la conception 3D et 2D, l&apos;innovation
                produit et le prototypage. SolidWorks, CATIA V5, Smarteam,
                Fusion 360, analyse des besoins, développement produit — des
                compétences forgées sur le terrain, dans des contextes
                industriels exigeants.
              </p>
              <p>
                Au-delà des prestations directes, ma vision est de bâtir un
                réseau structuré de consultants indépendants qualifiés en
                bureau d&apos;études — pour répondre à des projets
                multi-disciplinaires complets, du concept à la réalisation.
              </p>
            </div>

            {/* 3 info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {infoCards.map((card) => (
                <div
                  key={card.value}
                  className="p-4 bg-[#162030] rounded-lg border border-border-dark text-center"
                >
                  <card.icon size={20} className="text-primary mx-auto mb-3" />
                  <div className="text-primary font-black text-lg mb-1">
                    {card.value}
                  </div>
                  <p className="text-gray-400 text-xs leading-snug">
                    {card.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION RÉSEAU ── fond gris clair */}
      <section className="bg-background-light border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <span className="orange-line inline-block" />
            <h2 className="section-title">La vision : le réseau BE de demain</h2>
            <p className="section-subtitle mx-auto">
              KSOR Industrie construit un réseau de consultants indépendants
              couvrant tous les métiers du bureau d&apos;études industriel.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {networkDomains.map((domain) => (
              <div
                key={domain.title}
                className="bg-white border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                  <domain.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-[#333333] font-bold mb-2">{domain.title}</h3>
                <p className="text-[#666666] text-xs leading-relaxed">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEURS ── fond sombre + cartes blanches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <span className="orange-line block" />
          <h2 className="section-title-dark">Nos valeurs</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="card group text-center">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <v.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-[#333333] font-bold mb-2">{v.title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA DOUBLE ── fond orange */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            Partenaire ou consultant indépendant — contactez-nous pour explorer
            les opportunités.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded hover:bg-gray-100 transition-colors"
            >
              Nous contacter
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/reseau"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-colors"
            >
              Rejoindre le réseau
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
