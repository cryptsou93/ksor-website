import type { Metadata } from "next";
import {
  Users,
  Network,
  Handshake,
  TrendingUp,
  Shield,
  MapPin,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import NetworkForm from "@/components/NetworkForm";

export const metadata: Metadata = {
  title: {
    absolute: "Réseau Indépendants Bureau d'études | Rejoignez KSOR Industrie",
  },
  description:
    "Rejoignez le réseau de consultants indépendants KSOR Industrie. Missions de bureau d'études R&D en conception 3D, mécanique, électrique, automatisme. France & International.",
  alternates: {
    canonical: "https://www.ksorindustrie.com/reseau",
  },
  openGraph: {
    title: "Réseau Indépendants Bureau d'études | Rejoignez KSOR Industrie",
    description:
      "Consultants indépendants en conception 3D, R&D, mécanique, électrique. Rejoignez le réseau KSOR Industrie pour des missions variées.",
    url: "https://www.ksorindustrie.com/reseau",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Réseau Indépendants Bureau d'études | KSOR Industrie",
    description:
      "Rejoignez le réseau de consultants indépendants KSOR pour des missions en bureau d'études R&D.",
  },
};

const benefits = [
  {
    icon: Network,
    title: "Accès à des missions qualifiées",
    description:
      "Profitez de notre réseau clients pour accéder à des missions techniques variées, sans avoir à prospecter. Nous apportons les opportunités, vous apportez l'expertise.",
  },
  {
    icon: Handshake,
    title: "Partenariat de confiance",
    description:
      "Une relation directe et transparente avec notre fondateur. Pas d'intermédiaire anonyme — un vrai partenariat humain basé sur le respect mutuel.",
  },
  {
    icon: TrendingUp,
    title: "Développement professionnel",
    description:
      "Accédez à des projets stimulants qui élargissent vos compétences. Le réseau KSOR favorise le partage de connaissances entre membres.",
  },
  {
    icon: Shield,
    title: "Cadre sécurisé",
    description:
      "Missions encadrées par des contrats clairs, conditions de paiement transparentes et sécurisées. Vous vous concentrez sur votre expertise, nous gérons l'administratif.",
  },
  {
    icon: MapPin,
    title: "Ancrage national",
    description:
      "Priorité aux missions en France, avec ouverture à l'international. Le réseau accepte aussi les consultants disponibles pour des missions en remote.",
  },
  {
    icon: Users,
    title: "Communauté d'experts",
    description:
      "Rejoignez une communauté de professionnels de l'industrie. Échanges, entraide et possibilité de collaborer sur des projets multi-compétences.",
  },
];

const steps = [
  {
    num: "01",
    title: "Candidature en ligne",
    description:
      "Remplissez le formulaire ci-dessous avec votre profil, vos compétences et vos disponibilités.",
  },
  {
    num: "02",
    title: "Entretien avec notre fondateur",
    description:
      "Échange téléphonique ou visio pour mieux vous connaître et valider la compatibilité avec le réseau.",
  },
  {
    num: "03",
    title: "Intégration au réseau",
    description:
      "Après validation, vous intégrez officiellement le réseau. Votre profil est référencé pour les missions correspondantes.",
  },
  {
    num: "04",
    title: "Premières missions",
    description:
      "À chaque opportunité correspondant à votre profil, vous êtes contacté avec les détails de la mission.",
  },
];

const profiles = [
  "Ingénieur en conception mécanique",
  "Ingénieur en calcul de structure / simulation",
  "Ingénieur en automatisme / robotique",
  "Ingénieur en électronique embarquée",
  "Chef de projet industriel",
  "Ingénieur en procédés de fabrication",
  "Spécialiste lean / amélioration continue",
  "Designer industriel",
  "Technicien méthodes / outillage",
  "Expert en matériaux",
];

export default function ReseauPage() {
  return (
    <>
      {/* ── HERO — fond blanc ── */}
      <section className="relative bg-background-card border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-0.5 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Réseau indépendants
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#333333] mb-6">
              Rejoignez le réseau
              <br />
              <span className="text-gradient">d&apos;experts KSOR</span>
            </h1>
            <p className="text-[#666666] text-lg leading-relaxed mb-8">
              KSOR Industrie constitue un réseau de consultants indépendants
              hautement qualifiés pour répondre aux projets d&apos;envergure.
              Si vous êtes professionnel indépendant du bureau d&apos;études
              avec au moins 5 ans d&apos;expérience, nous voulons vous
              connaître.
            </p>
            <a
              href="#inscription"
              className="btn-primary text-base px-8 py-4"
            >
              <Users size={20} />
              Rejoindre le réseau
            </a>
          </div>
        </div>
      </section>

      {/* ── AVANTAGES — fond sombre, cartes blanches ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <span className="orange-line inline-block" />
          <h2 className="section-title-dark">
            Pourquoi rejoindre le réseau KSOR ?
          </h2>
          <p className="section-subtitle-dark mx-auto">
            Le réseau KSOR n&apos;est pas une simple base de données de
            freelances. C&apos;est un partenariat sélectif et durable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card group">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-[#333333] font-semibold text-lg mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE — fond gris clair ── */}
      <section className="bg-background-light border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <span className="orange-line inline-block" />
            <h2 className="section-title">Comment ça marche ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-black text-primary/30">
                    {step.num}
                  </span>
                  {i < steps.length - 1 && (
                    <ChevronRight
                      size={20}
                      className="text-border hidden lg:block absolute right-0 top-3"
                    />
                  )}
                </div>
                <h3 className="text-[#333333] font-semibold mb-2">{step.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFILS — fond sombre + encart blanc ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="orange-line block" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Les profils recherchés
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Nous recherchons des professionnels expérimentés,
              autonomes et rigoureux. Le critère principal : au moins 5 ans
              d&apos;expérience en milieu industriel réel.
            </p>
            <ul className="space-y-3">
              {profiles.map((profile) => (
                <li
                  key={profile}
                  className="flex items-center gap-3 text-gray-300 text-sm"
                >
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  {profile}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-[#333333] font-bold text-xl mb-6">
              Les conditions de collaboration
            </h3>
            <div className="space-y-5">
              {[
                {
                  title: "Statut",
                  desc: "Auto-entrepreneur, EURL, SASU ou portage salarial acceptés",
                },
                {
                  title: "Expérience minimale",
                  desc: "5 ans d'expérience en industrie (hors alternance/stage)",
                },
                {
                  title: "Disponibilité",
                  desc: "Missions ponctuelles ou récurrentes selon vos disponibilités",
                },
                {
                  title: "Zone géographique",
                  desc: "Préférence pour la France, remote possible selon missions",
                },
                {
                  title: "Tarification",
                  desc: "Taux journalier négocié selon profil et complexité de la mission",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 pb-5 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <div>
                    <div className="text-[#333333] font-medium text-sm mb-1">
                      {item.title}
                    </div>
                    <div className="text-[#666666] text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE — fond gris clair ── */}
      <section
        id="inscription"
        className="bg-background-light border-t border-border"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <span className="orange-line inline-block" />
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Formulaire d&apos;inscription
            </h2>
            <p className="text-[#666666]">
              Remplissez ce formulaire pour soumettre votre candidature au
              réseau KSOR Industrie. Tous les champs marqués d&apos;un{" "}
              <span className="text-primary">*</span> sont obligatoires.
            </p>
          </div>
          <div className="bg-background rounded-xl p-8 border border-border-dark">
            <NetworkForm />
          </div>
        </div>
      </section>
    </>
  );
}
