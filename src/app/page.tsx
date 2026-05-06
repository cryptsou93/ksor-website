import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  FlaskConical,
  Wrench,
  Cog,
  MapPin,
  Award,
  Zap,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Bureau d'études R&D | Conception 3D, Prototypage | KSOR Industrie",
  },
  description:
    "KSOR Industrie, bureau d'études spécialisé en conception 3D, prototypage et R&D industrielle. Expertise en mécanique, électrique et automatisme. Intervention France et International.",
  alternates: {
    canonical: "https://www.ksorindustrie.com",
  },
  openGraph: {
    title:
      "Bureau d'études R&D | Conception 3D, Prototypage | KSOR Industrie",
    description:
      "Bureau d'études spécialisé en conception 3D, prototypage industriel et R&D. Expert SolidWorks, CATIA V5. Intervention France & International.",
    url: "https://www.ksorindustrie.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bureau d'études R&D | Conception 3D & Prototypage | KSOR Industrie",
    description:
      "Bureau d'études R&D : conception 3D, prototypage industriel, mécanique, électrique, automatisme.",
  },
};

const services = [
  {
    icon: Layers,
    title: "Conception 3D & 2D",
    description:
      "Modélisation à partir de croquis, mises en plan, cotation ISO, surfaces esthétiques, scan 3D. SolidWorks · CATIA V5 · Smarteam · Fusion 360.",
  },
  {
    icon: FlaskConical,
    title: "Innovation & R&D industrielle",
    description:
      "Étude des exigences, faisabilité technique et économique, développement produit, validation matériaux.",
  },
  {
    icon: Wrench,
    title: "Prototypage industriel",
    description:
      "Du prototype conceptuel au prototype opérationnel : nous validons votre produit à chaque étape clé.",
  },
  {
    icon: Cog,
    title: "Mécanique & Automatisme",
    description:
      "Calcul de structure, schémas électriques, PLC/SCADA — disponibles via notre réseau de consultants.",
  },
];

const stats = [
  { value: "+50", label: "Projets réalisés" },
  { value: "3", label: "Domaines d'expertise" },
  { value: "100%", label: "Sur-mesure" },
];

const whyUs = [
  {
    icon: Award,
    title: "Expertise directe",
    description:
      "15 ans d'expérience en conception 3D et R&D industrielle dans les plus grands groupes. Vous travaillez directement avec notre expert en bureau d'études, sans intermédiaire.",
  },
  {
    icon: Zap,
    title: "Réactivité & agilité",
    description:
      "Bureau d'études indépendant spécialisé en prototypage et conception industrielle. Devis sous 24h, démarrage rapide, adaptation totale à vos contraintes.",
  },
  {
    icon: Users,
    title: "Réseau complémentaire",
    description:
      "Au-delà de la conception 3D et du prototypage industriel, accédez à un réseau de spécialistes en mécanique, électrique et automatisme.",
  },
];

// Témoignages illustratifs — à remplacer par de vrais retours clients
const testimonials = [
  {
    text: "KSOR Industrie a pris en charge la conception 3D de notre pièce maîtresse sur SolidWorks. Livraison dans les délais, qualité irréprochable et vrai savoir-faire R&D.",
    name: "Directeur technique",
    company: "PME industrielle, secteur automobile",
  },
  {
    text: "Du prototypage conceptuel au prototype fonctionnel, un suivi rigoureux et une vraie expertise en bureau d'études. Je recommande KSOR Industrie sans hésitation.",
    name: "Responsable R&D",
    company: "Startup deeptech, secteur médical",
  },
  {
    text: "Mission de conception CATIA V5 rondement menée. Une réactivité exemplaire et une compréhension immédiate des contraintes industrielles.",
    name: "Chef de projet",
    company: "Groupe industriel, secteur aéronautique",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── fond sombre */}
      <section className="relative min-h-[90vh] flex items-center bg-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-0.5 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Bureau d&apos;études R&amp;D · France &amp; International
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Bureau d&apos;études
              <br />
              <span className="text-gradient">conception 3D &amp; R&amp;D</span>
              <br />
              industrielle
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
              Conception 3D SolidWorks &amp; CATIA, prototypage industriel,
              mécanique, électrique, automatisme — nous transformons vos idées
              en produits industriels fonctionnels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Demander un devis
                <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="btn-outline text-base px-8 py-4">
                Nos services
              </Link>
            </div>

            <div className="flex items-center gap-2 mt-10 text-sm text-gray-500">
              <MapPin size={14} className="text-primary" />
              Langon (33210), France — Interventions France &amp; International
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── fond blanc */}
      <section className="border-y border-border bg-background-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#666666]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── fond sombre + cartes blanches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <span className="orange-line block" />
          <h2 className="section-title-dark">Nos domaines d&apos;expertise</h2>
          <p className="section-subtitle-dark">
            Conception 3D, prototypage industriel, R&amp;D — nous intervenons
            à chaque étape de votre projet industriel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="card group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                  <service.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-[#333333] font-semibold text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            Voir tous nos services
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── POURQUOI NOUS CHOISIR ── fond blanc */}
      <section className="bg-background-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <span className="orange-line inline-block" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Pourquoi choisir KSOR Industrie ?
            </h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Un bureau d&apos;études R&amp;D agile, expert en conception 3D
              et prototypage industriel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-8 bg-background-light rounded-xl border border-border"
              >
                <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto mb-6">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-[#333333] font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-[#666666] leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉSEAU ── fond gris clair */}
      <section className="bg-background-light border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <span className="orange-line inline-block" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              Rejoignez le réseau KSOR Industrie
            </h2>
            <p className="text-[#666666] text-lg mb-8">
              Professionnel indépendant du bureau d&apos;études ? Intégrez notre
              réseau de consultants spécialisés et participez à des missions
              variées en France et à distance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/reseau" className="btn-primary">
                Rejoindre le réseau
                <ArrowRight size={18} />
              </Link>
              <Link href="/reseau#inscription" className="btn-outline">
                Voir les profils recherchés
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── fond sombre + cartes blanches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12 text-center">
          <span className="orange-line inline-block" />
          <h2 className="section-title-dark">Ce que disent nos clients</h2>
          <p className="section-subtitle-dark mx-auto">
            Retours d&apos;expérience sur nos missions de bureau
            d&apos;études R&amp;D
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card flex flex-col">
              <div className="text-primary text-4xl font-black leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-[#555555] text-sm leading-relaxed mb-6 flex-1 italic">
                {t.text}
              </p>
              <div className="border-t border-border pt-4">
                <div className="text-[#333333] font-semibold text-sm">
                  {t.name}
                </div>
                <div className="text-[#999999] text-xs">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA CONTACT ── fond orange */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Un projet de conception 3D ou R&amp;D ?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Premier échange offert, sans engagement. Discutons de vos besoins
            en bureau d&apos;études.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded hover:bg-gray-100 transition-colors"
          >
            Nous contacter
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
