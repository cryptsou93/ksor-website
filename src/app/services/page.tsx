import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  FlaskConical,
  Wrench,
  Cog,
  Zap,
  Settings,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Conception 3D, R&D & Prototypage Industriel | KSOR Industrie",
  },
  description:
    "Bureau d'études KSOR Industrie : conception 3D SolidWorks CATIA, prototypage industriel, R&D, mécanique, électrique, automatisme. Devis sous 24h. France & International.",
  alternates: {
    canonical: "https://www.ksorindustrie.com/services",
  },
  openGraph: {
    title: "Conception 3D, R&D & Prototypage Industriel | KSOR Industrie",
    description:
      "Conception 3D SolidWorks CATIA, prototypage industriel, R&D industrielle — disponibles maintenant. Bureau d'études KSOR Industrie.",
    url: "https://www.ksorindustrie.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conception 3D, R&D & Prototypage Industriel | KSOR Industrie",
    description:
      "Conception 3D, prototypage industriel, R&D — bureau d'études expert France & International.",
  },
};

const availableServices = [
  {
    id: "conception",
    icon: Layers,
    title: "Conception 3D & 2D",
    description:
      "Nous transformons vos idées, croquis ou cahiers des charges en modèles 3D précis et en plans de fabrication conformes aux normes industrielles.",
    items: [
      "Modélisation à partir de croquis ou de brief",
      "Mises en plan et nomenclatures",
      "Cotation ISO et tolérancement géométrique",
      "Surfaces esthétiques et pièces complexes",
      "Numérisation et scan 3D",
    ],
    tools: ["SolidWorks", "CATIA V5", "Smarteam", "Fusion 360"],
  },
  {
    id: "rnd",
    icon: FlaskConical,
    title: "Innovation & R&D",
    description:
      "Nous accompagnons vos projets d'innovation de l'idée au produit : analyse des besoins, faisabilité, développement et validation.",
    items: [
      "Étude et analyse des exigences",
      "Faisabilité technique et économique",
      "Développement produit itératif",
      "Validation matériaux et procédés",
      "Rapport technique et dossier de conception",
    ],
  },
  {
    id: "prototypage",
    icon: Wrench,
    title: "Prototypage industriel",
    description:
      "Du premier concept à la pré-série, chaque étape de prototypage permet de valider et d'affiner votre produit avant la mise en production.",
    steps: [
      {
        num: "01",
        label: "Prototype conceptuel",
        desc: "Validation de la forme et de l'encombrement",
      },
      {
        num: "02",
        label: "Prototype esthétique",
        desc: "Rendu visuel, surfaces et finitions",
      },
      {
        num: "03",
        label: "Prototype fonctionnel",
        desc: "Validation des fonctions mécaniques",
      },
      {
        num: "04",
        label: "Prototype opérationnel",
        desc: "Pré-série et qualification finale",
      },
    ],
  },
];

const comingSoonServices = [
  {
    icon: Cog,
    title: "Mécanique générale",
    description: "Calcul de structure, analyse par éléments finis (FEA), dimensionnement.",
  },
  {
    icon: Zap,
    title: "Électrique & câblage",
    description: "Schémas électriques, conception d'armoires, câblage industriel.",
  },
  {
    icon: Settings,
    title: "Automatisme & robotique",
    description: "Programmation PLC/automate, SCADA, intégration de systèmes robotisés.",
  },
  {
    icon: Briefcase,
    title: "Chef de projet industriel",
    description: "Coordination de projets, planning, suivi fournisseurs et sous-traitants.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── fond blanc */}
      <section className="bg-background-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-0.5 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Nos Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#333333] mb-6">
              L&apos;expertise dont vous
              <br />
              avez besoin, maintenant
            </h1>
            <p className="text-[#666666] text-lg leading-relaxed">
              Des services disponibles immédiatement, complétés par les
              compétences de notre réseau d&apos;indépendants qualifiés en
              cours de constitution.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARTIE 1 : DISPONIBLE MAINTENANT ── fond sombre + cartes blanches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full mb-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                Disponible maintenant
              </span>
            </div>
            <h2 className="section-title-dark">Services disponibles</h2>
            <p className="section-subtitle-dark">
              Prestations assurées directement par notre expert en conception
              industrielle.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Conception 3D & 2D */}
          <div className="card group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Layers size={28} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#333333]">
                    {availableServices[0].title}
                  </h2>
                </div>
                <p className="text-[#666666] text-sm leading-relaxed mb-6">
                  {availableServices[0].description}
                </p>
                <ul className="space-y-2">
                  {availableServices[0].items!.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#555555]">
                      <CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between">
                <div className="p-5 bg-background-light rounded-lg border border-border">
                  <p className="text-xs text-[#999999] uppercase tracking-wider mb-3">
                    Logiciels maîtrisés
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {availableServices[0].tools!.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-white border border-primary/30 rounded text-primary text-sm font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation & R&D */}
          <div className="card group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <FlaskConical size={28} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#333333]">
                    {availableServices[1].title}
                  </h2>
                </div>
                <p className="text-[#666666] text-sm leading-relaxed mb-6">
                  {availableServices[1].description}
                </p>
                <ul className="space-y-2">
                  {availableServices[1].items!.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#555555]">
                      <CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 bg-background-light rounded-lg border border-border h-fit">
                <p className="text-[#333333] font-semibold text-sm mb-2">
                  Notre approche
                </p>
                <p className="text-[#666666] text-sm leading-relaxed">
                  Chaque projet est traité de manière indépendante. Nous
                  analysons vos contraintes, proposons des solutions adaptées
                  et documentons chaque décision technique pour garantir la
                  traçabilité de votre R&amp;D.
                </p>
              </div>
            </div>
          </div>

          {/* Prototypage industriel */}
          <div className="card group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Wrench size={28} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-[#333333]">
                {availableServices[2].title}
              </h2>
            </div>
            <p className="text-[#666666] text-sm leading-relaxed mb-8 max-w-2xl">
              {availableServices[2].description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {availableServices[2].steps!.map((step) => (
                <div
                  key={step.num}
                  className="p-4 bg-background-light rounded-lg border border-border text-center"
                >
                  <span className="text-3xl font-black text-primary/20 block mb-2">
                    {step.num}
                  </span>
                  <p className="text-[#333333] font-semibold text-sm mb-1">
                    {step.label}
                  </p>
                  <p className="text-[#999999] text-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTIE 2 : BIENTÔT VIA LE RÉSEAU ── fond gris clair */}
      <section className="bg-background-light border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-3">
              <Clock size={12} className="text-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                Bientôt disponible via notre réseau
              </span>
            </div>
            <h2 className="section-title">
              Compétences complémentaires en cours de déploiement
            </h2>
            <p className="section-subtitle">
              Ces domaines seront accessibles via notre réseau de consultants
              indépendants spécialisés, en cours de constitution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {comingSoonServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-border rounded-lg p-6 opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg w-fit mb-4">
                  <service.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-[#333333] font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA réseau */}
          <div className="bg-white border-2 border-primary/30 rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[#333333] font-bold text-lg mb-1">
                Vous êtes indépendant dans l&apos;un de ces domaines ?
              </p>
              <p className="text-[#666666] text-sm">
                Rejoignez notre réseau et participez à des missions dès
                son lancement.
              </p>
            </div>
            <Link href="/reseau" className="btn-primary whitespace-nowrap shrink-0">
              Rejoindre le réseau
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── fond sombre */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Premier échange offert, sans engagement. Décrivez-nous votre besoin
          et nous revenons vers vous sous 48h.
        </p>
        <Link href="/contact" className="btn-primary text-base px-8 py-4">
          Nous contacter
          <ArrowRight size={20} />
        </Link>
      </section>
    </>
  );
}
