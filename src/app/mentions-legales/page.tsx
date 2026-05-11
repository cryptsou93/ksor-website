import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de KSOR Industrie.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-black text-white mb-8">Mentions légales</h1>

      <div className="prose prose-invert max-w-none prose-p:text-gray-400 prose-h2:text-white prose-h2:text-xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-3">
        <h2>Éditeur du site</h2>
        <p>
          <strong className="text-white">KSOR Industrie</strong>
          <br />
          Entreprise individuelle
          <br />
          Adresse : Langon (33210), France
          <br />
          Email : contact@ksorindustrie.com
          <br />
          Téléphone : +33 6 68 13 51 71
          <br />
          SIRET : 893 467 852 00024
        </p>

        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San
          Francisco, California 94104, USA.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, logos, icônes)
          est la propriété exclusive de KSOR Industrie, sauf mention contraire.
          Toute reproduction, représentation ou utilisation partielle ou totale
          sans autorisation préalable est interdite.
        </p>

        <h2>Responsabilité</h2>
        <p>
          KSOR Industrie s&apos;efforce de fournir des informations exactes et
          à jour. Cependant, l&apos;exactitude, la complétude et
          l&apos;actualité des informations publiées ne peuvent être garanties.
          KSOR Industrie ne saurait être tenu responsable des erreurs ou
          omissions dans ces informations.
        </p>

        <h2>Liens hypertextes</h2>
        <p>
          Ce site peut contenir des liens vers des sites tiers. KSOR Industrie
          n&apos;est pas responsable du contenu de ces sites externes.
        </p>

        <h2>Droit applicable</h2>
        <p>
          Le présent site est soumis au droit français. En cas de litige, les
          tribunaux français seront seuls compétents.
        </p>
      </div>
    </div>
  );
}
