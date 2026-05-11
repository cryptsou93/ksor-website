import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Bureau d'études R&D | KSOR Industrie",
  },
  description:
    "Contactez KSOR Industrie pour votre projet de conception 3D, prototypage industriel ou R&D. Premier échange offert. Bureau d'études à Langon (33210), France.",
  alternates: {
    canonical: "https://www.ksorindustrie.com/contact",
  },
  openGraph: {
    title: "Contact Bureau d'études R&D | KSOR Industrie",
    description:
      "Contactez notre bureau d'études pour vos projets de conception 3D, prototypage industriel, R&D. Premier échange offert, sans engagement.",
    url: "https://www.ksorindustrie.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bureau d'études R&D | KSOR Industrie",
    description:
      "Bureau d'études R&D : discutons de votre projet conception 3D ou prototypage industriel.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── fond blanc */}
      <section className="bg-background-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-0.5 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Contact
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#333333] mb-6">
              Parlons de votre projet
            </h1>
            <p className="text-[#666666] text-lg leading-relaxed">
              Premier échange offert, sans engagement. Décrivez-nous votre
              besoin et nous revenons vers vous sous 48h ouvrées.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTENU ── fond sombre */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Coordonnées */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-border rounded-xl p-8 shadow-sm h-fit">
              <h2 className="text-[#333333] font-bold text-lg mb-8">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-[#999999] uppercase tracking-wider mb-1">Email</div>
                    <a
                      href="mailto:contact@ksorindustrie.com"
                      className="text-[#333333] hover:text-primary transition-colors text-sm"
                    >
                      contact@ksorindustrie.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-[#999999] uppercase tracking-wider mb-1">Téléphone</div>
                    <a
                      href="tel:+33668135171"
                      className="text-[#333333] hover:text-primary transition-colors text-sm"
                    >
                      +33 6 68 13 51 71
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-[#999999] uppercase tracking-wider mb-1">Adresse</div>
                    <p className="text-[#555555] text-sm">
                      Langon (33210)
                      <br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-[#999999] uppercase tracking-wider mb-1">Disponibilités</div>
                    <p className="text-[#555555] text-sm">
                      Lun – Ven : 8h – 18h
                      <br />
                      Réponse sous 24–48h ouvrées
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href="https://www.linkedin.com/in/damien-pinon-58449b30b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#555555] hover:text-primary transition-colors text-sm"
                >
                  <Linkedin size={18} />
                  KSOR Industrie — LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">
                Envoyez-nous un message
              </h2>
              <span className="text-xs text-gray-500">
                <span className="text-primary">*</span> Champs obligatoires
              </span>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
