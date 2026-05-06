import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, ArrowRight } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["KSOR Industrie"],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "KSOR Industrie",
      url: "https://www.ksorindustrie.com/apropos",
    },
    publisher: {
      "@type": "Organization",
      name: "KSOR Industrie",
      url: "https://www.ksorindustrie.com",
    },
    datePublished: post.date,
    url: `https://www.ksorindustrie.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO — fond blanc ── */}
      <section className="bg-background-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#999999] hover:text-primary transition-colors text-sm mb-8"
          >
            <ArrowLeft size={16} />
            Retour au blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full flex items-center gap-1.5">
              <Tag size={11} />
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#333333] mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-[#666666] mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-[#999999] pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                DP
              </div>
              <span className="text-[#555555]">Notre expert</span>
            </div>
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-primary" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-primary" />
              {post.readTime} de lecture
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTENU — fond blanc ── */}
      <section className="bg-background-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-[#333333]
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-[#666666] prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#333333]
              prose-ul:text-[#666666] prose-li:marker:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* ── AUTEUR — fond gris clair ── */}
      <section className="bg-background-light border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="p-8 bg-white border border-border rounded-xl shadow-sm">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl shrink-0">
                DP
              </div>
              <div>
                <div className="text-xs text-[#999999] uppercase tracking-wider mb-1">
                  Auteur
                </div>
                <h3 className="text-[#333333] font-bold text-lg mb-1">
                  Notre expert KSOR
                </h3>
                <p className="text-[#666666] text-sm mb-3">
                  Fondateur de KSOR Industrie — Concepteur industriel avec 15 ans
                  d&apos;expérience en bureau d&apos;études R&amp;D.
                </p>
                <Link
                  href="/apropos"
                  className="text-primary text-sm hover:underline"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTRES ARTICLES — fond sombre, cartes blanches ── */}
      {otherPosts.length > 0 && (
        <section className="border-t border-border-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              À lire également
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group card"
                >
                  <span className="text-xs text-primary mb-3 block">
                    {p.category}
                  </span>
                  <h3 className="text-[#333333] font-bold mb-2 group-hover:text-primary transition-colors text-sm leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-[#666666] text-xs leading-relaxed line-clamp-2">
                    {p.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-primary text-xs mt-4 group-hover:gap-2 transition-all">
                    Lire <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
