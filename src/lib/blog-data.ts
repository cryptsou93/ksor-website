import { readdir, readFile } from "fs/promises";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "conception-produit-industriel-2024",
    title: "Les étapes clés d'un projet de conception industrielle réussi",
    excerpt:
      "De l'expression du besoin au prototype validé, découvrez notre méthodologie éprouvée pour mener à bien vos projets de conception.",
    content: `
      <p>La conception industrielle est un processus structuré qui transforme une idée en produit manufacturé. Au fil de mes 15 années d'expérience, j'ai développé une méthodologie rigoureuse qui maximise les chances de succès de chaque projet.</p>

      <h2>1. Expression et analyse du besoin</h2>
      <p>Tout projet commence par une phase d'écoute approfondie. Il s'agit de comprendre non seulement ce que le client souhaite obtenir, mais surtout pourquoi et dans quel contexte d'usage. Cette étape détermine l'ensemble du projet.</p>

      <h2>2. Étude de faisabilité</h2>
      <p>Avant d'investir dans la conception détaillée, nous évaluons la faisabilité technique, économique et temporelle du projet. Cette phase permet d'identifier les risques et de définir les contraintes de conception.</p>

      <h2>3. Conception préliminaire (APS)</h2>
      <p>L'avant-projet sommaire explore les différentes solutions possibles via des croquis, des schémas de principe et des maquettes numériques légères. Plusieurs pistes sont étudiées avant de retenir la solution optimale.</p>

      <h2>4. Conception détaillée (APD)</h2>
      <p>L'avant-projet détaillé formalise la solution retenue en modélisation 3D complète, plans de définition et spécifications techniques. C'est la phase la plus exigeante techniquement.</p>

      <h2>5. Prototypage et validation</h2>
      <p>Le prototype physique — qu'il soit réalisé par impression 3D, usinage ou autre procédé — permet de valider concrètement les choix de conception et d'identifier les derniers ajustements nécessaires.</p>

      <p>Cette approche itérative et rigoureuse garantit un résultat conforme aux attentes tout en maîtrisant les délais et les coûts.</p>
    `,
    date: "2025-03-15",
    category: "Méthodologie",
    readTime: "5 min",
    image: "/blog/conception-industrielle.jpg",
  },
  {
    slug: "innovation-pme-france",
    title: "Comment les PME françaises peuvent accélérer leur innovation",
    excerpt:
      "Les PME disposent d'atouts considérables pour innover. Voici comment tirer parti des dispositifs d'accompagnement et des réseaux professionnels.",
    content: `
      <p>La France offre un tissu industriel dynamique pour l'innovation. Pourtant, de nombreuses PME n'exploitent pas pleinement les ressources disponibles pour accélérer leur développement.</p>

      <h2>Les dispositifs de financement</h2>
      <p>Les régions, en partenariat avec Bpifrance et l'État, proposent de nombreux dispositifs d'aide à l'innovation : aides à l'innovation, prêts bonifiés, interventions en capital. Il est essentiel de bien identifier ceux qui correspondent à votre projet.</p>

      <h2>Le rôle des bureaux d'études R&D</h2>
      <p>Faire appel à un bureau d'études externalisé comme KSOR Industrie permet aux PME d'accéder à des compétences de haut niveau sans les coûts fixes d'une équipe interne. C'est une approche particulièrement adaptée pour les projets ponctuels ou les phases d'innovation.</p>

      <h2>L'importance des réseaux professionnels</h2>
      <p>Les clusters, les associations professionnelles et les pôles de compétitivité constituent des écosystèmes précieux pour trouver des partenaires, des sous-traitants et des débouchés commerciaux.</p>

      <p>En combinant ces ressources avec une démarche d'innovation structurée, les PME françaises ont toutes les cartes en main pour rivaliser avec les grandes entreprises.</p>
    `,
    date: "2025-02-08",
    category: "Innovation",
    readTime: "4 min",
    image: "/blog/pme-innovation.jpg",
  },
  {
    slug: "prototypage-rapide-tendances",
    title: "Prototypage rapide : les technologies qui transforment la R&D industrielle",
    excerpt:
      "Impression 3D métal, simulation numérique, jumeaux numériques... Les nouvelles technologies révolutionnent la façon de concevoir et tester les produits industriels.",
    content: `
      <p>Le prototypage a connu une révolution ces dernières années. Les délais se sont considérablement raccourcis tandis que les possibilités techniques se sont élargies. Voici un panorama des technologies qui changent la donne.</p>

      <h2>L'impression 3D métal</h2>
      <p>La fabrication additive métal (SLM, DMLS) permet désormais de produire des pièces fonctionnelles complexes directement à partir des fichiers CAO. Les pièces obtenues présentent des propriétés mécaniques comparables aux pièces usinées pour de nombreuses applications.</p>

      <h2>La simulation numérique avancée</h2>
      <p>Les logiciels de simulation (FEA, CFD, topologie) permettent de tester virtuellement des centaines de configurations en quelques heures. Cette approche "shift left" détecte les problèmes en amont, avant même de fabriquer le premier prototype physique.</p>

      <h2>Le jumeau numérique</h2>
      <p>La création d'un modèle numérique fidèle à la réalité physique (jumeau numérique) permet de surveiller en temps réel le comportement d'un équipement et d'anticiper les défaillances. Cette technologie trouve de plus en plus d'applications dans l'industrie.</p>

      <h2>L'impact sur les délais et coûts</h2>
      <p>Combinées à une méthodologie rigoureuse, ces technologies peuvent réduire de 40 à 60% les délais de développement produit tout en améliorant la qualité finale.</p>
    `,
    date: "2025-01-20",
    category: "Technologies",
    readTime: "6 min",
    image: "/blog/prototypage-rapide.jpg",
  },
  {
    slug: "optimisation-process-industriel",
    title: "Réduire les coûts de production sans sacrifier la qualité",
    excerpt:
      "L'optimisation des processus industriels est un levier puissant pour améliorer la compétitivité. Méthodes, outils et retours d'expérience.",
    content: `
      <p>Dans un contexte économique exigeant, l'optimisation des processus de production est devenue un enjeu stratégique pour les industriels. Voici les approches qui donnent les meilleurs résultats.</p>

      <h2>L'analyse de la chaîne de valeur (VSM)</h2>
      <p>La cartographie de la chaîne de valeur permet d'identifier visuellement les flux de matières et d'informations, et surtout de repérer les gaspillages : surproduction, attentes, transports inutiles, sur-processing...</p>

      <h2>La conception pour la fabrication (DFM/DFA)</h2>
      <p>Intégrer les contraintes de fabrication dès la phase de conception est l'un des leviers les plus puissants. Un produit bien conçu pour la fabrication peut réduire les coûts de production de 30% par rapport à une conception non optimisée.</p>

      <h2>L'automatisation sélective</h2>
      <p>Automatiser ne signifie pas tout automatiser. Une analyse rigoureuse des postes à forte valeur ajoutée humaine versus les tâches répétitives permet de cibler les investissements là où le ROI est le plus élevé.</p>

      <p>Chaque projet d'optimisation est unique. L'approche doit être adaptée au contexte spécifique de chaque entreprise pour garantir des résultats durables.</p>
    `,
    date: "2024-12-05",
    category: "Process",
    readTime: "5 min",
    image: "/blog/optimisation-process.jpg",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export async function getDynamicBlogPosts(): Promise<BlogPost[]> {
  try {
    const dir = path.join(process.cwd(), "public", "blog-posts");
    const files = await readdir(dir);
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith(".json"))
        .map(async (f) => {
          const raw = await readFile(path.join(dir, f), "utf-8");
          return JSON.parse(raw) as BlogPost;
        })
    );
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const dynamic = await getDynamicBlogPosts();
  const dynamicSlugs = new Set(dynamic.map((p) => p.slug));
  const statics = blogPosts.filter((p) => !dynamicSlugs.has(p.slug));
  return [...dynamic, ...statics].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const dynamic = await getDynamicBlogPosts();
  return dynamic.find((p) => p.slug === slug) ?? blogPosts.find((p) => p.slug === slug);
}
