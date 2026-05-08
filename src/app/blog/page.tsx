import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Ingénierie Industrielle & R&D | KSOR Industrie",
  },
  description:
    "Articles experts sur la conception 3D, prototypage industriel, R&D industrielle, SolidWorks, CATIA V5 et les tendances de l'ingénierie industrielle par KSOR Industrie.",
  alternates: {
    canonical: "https://www.ksorindustrie.com/blog",
  },
  openGraph: {
    title: "Blog Ingénierie Industrielle & R&D | KSOR Industrie",
    description:
      "Articles et conseils sur la conception 3D, prototypage industriel, R&D et l'ingénierie industrielle par KSOR Industrie.",
    url: "https://www.ksorindustrie.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Ingénierie Industrielle & R&D | KSOR Industrie",
    description:
      "Articles sur la conception 3D, prototypage industriel, R&D industrielle — expertise KSOR Industrie.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* ── HERO — fond blanc ── */}
      <section className="bg-background-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-0.5 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#333333] mb-6">
              Actualités &amp; Insights
            </h1>
            <p className="text-[#666666] text-lg leading-relaxed">
              Articles sur la conception industrielle, les tendances R&amp;D et
              l&apos;innovation technologique. Rédigés par notre expert, depuis
              le terrain.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLE À LA UNE — fond gris clair ── */}
      <section className="bg-background-light border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-xl border border-border bg-white p-8 md:p-10 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    À la une
                  </span>
                  <span className="px-3 py-1 bg-background-light border border-border text-[#666666] text-xs rounded-full flex items-center gap-1">
                    <Tag size={10} />
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4 group-hover:text-primary transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-[#666666] leading-relaxed mb-6 max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-[#999999]">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-primary" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-primary" />
                    {featured.readTime} de lecture
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Lire l&apos;article
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── TOUS LES ARTICLES — fond sombre, cartes blanches ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-xl font-bold text-white mb-8">
          Tous les articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 bg-background-light border border-border text-[#666666] text-xs rounded-full flex items-center gap-1">
                  <Tag size={10} />
                  {post.category}
                </span>
              </div>
              <h3 className="text-[#333333] font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-6 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-[#999999] pt-4 border-t border-border">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-primary" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-primary" />
                  {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA — fond orange ── */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Vous avez un projet industriel ?
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Ces articles vous ont donné des idées ? Discutons concrètement de
            votre projet.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded hover:bg-gray-100 transition-colors">
            Prendre contact
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
