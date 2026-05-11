import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données de KSOR Industrie.",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-black text-white mb-8">
        Politique de confidentialité
      </h1>

      <div className="prose prose-invert max-w-none prose-p:text-gray-400 prose-h2:text-white prose-h2:text-xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-3 prose-ul:text-gray-400">
        <p className="text-gray-500 text-sm">
          Dernière mise à jour : mai 2026
        </p>

        <h2>Responsable du traitement</h2>
        <p>
          KSOR Industrie est responsable du
          traitement de vos données personnelles collectées via ce site.
          <br />
          Contact : contact@ksorindustrie.com
        </p>

        <h2>Données collectées</h2>
        <p>
          Nous collectons uniquement les données que vous nous fournissez
          volontairement via nos formulaires :
        </p>
        <ul>
          <li>Formulaire de contact : nom, email, téléphone, entreprise, message</li>
          <li>
            Formulaire réseau : nom, email, téléphone, localisation, spécialité,
            expérience, motivation
          </li>
        </ul>

        <h2>Finalités du traitement</h2>
        <p>Vos données sont utilisées pour :</p>
        <ul>
          <li>Répondre à vos demandes de contact et de devis</li>
          <li>Constituer et gérer notre réseau de consultants indépendants</li>
          <li>Assurer le suivi de nos relations commerciales</li>
        </ul>

        <h2>Base légale</h2>
        <p>
          Le traitement repose sur votre consentement explicite donné lors de
          la soumission du formulaire, conformément au RGPD (article 6.1.a).
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Les données de contact sont conservées pendant 3 ans à compter du
          dernier contact. Les données du réseau de consultants sont conservées
          tant que vous êtes membre actif du réseau.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez des droits suivants sur vos
          données personnelles :
        </p>
        <ul>
          <li>Droit d&apos;accès</li>
          <li>Droit de rectification</li>
          <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité</li>
          <li>Droit d&apos;opposition</li>
        </ul>
        <p>
          Pour exercer vos droits, contactez-nous à : contact@ksorindustrie.com
        </p>

        <h2>Sous-traitants et transferts hors UE</h2>
        <p>
          Vos données transitent par les prestataires suivants dans le cadre du
          traitement de vos formulaires :
        </p>
        <ul>
          <li>
            <strong className="text-white">Resend</strong> — service d&apos;envoi
            d&apos;emails (serveurs aux États-Unis). Les données transmises sont
            limitées aux informations saisies dans le formulaire. Resend est
            soumis au DPF (Data Privacy Framework) UE–États-Unis.
          </li>
          <li>
            <strong className="text-white">Vercel</strong> — hébergement du site
            (serveurs aux États-Unis et en Europe). Vercel est certifié DPF
            UE–États-Unis.
          </li>
        </ul>
        <p>
          Aucune donnée personnelle n&apos;est stockée dans une base de données
          par KSOR Industrie. Les informations de vos formulaires sont
          uniquement transmises par email à l&apos;adresse
          contact@ksorindustrie.com.
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site n&apos;utilise pas de cookies de traçage ou de publicité.
          Seuls des cookies techniques essentiels au fonctionnement du site
          peuvent être utilisés.
        </p>

        <h2>Réclamation</h2>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez
          adresser une réclamation à la CNIL (Commission Nationale de
          l&apos;Informatique et des Libertés) : www.cnil.fr
        </p>
      </div>
    </div>
  );
}
