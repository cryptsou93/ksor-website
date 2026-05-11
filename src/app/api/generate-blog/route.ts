import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import type { BlogPost } from "@/lib/blog-data";

let _redis: Redis | null = null;
function getRedis() {
  if (!_redis) _redis = Redis.fromEnv();
  return _redis;
}

function extractJson(text: string): unknown {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("Aucun objet JSON trouvé dans le contenu");
  return JSON.parse(match[0]);
}

function sanitizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function POST(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token || token !== process.env.BLOG_SECRET_TOKEN) {
    return NextResponse.json({ success: false, message: "Non autorisé" }, { status: 401 });
  }

  try {
    // Lecture du body brut — URLSearchParams casse sur les & dans le JSON
    const buf = await request.arrayBuffer();
    const raw = Buffer.from(buf).toString("utf-8");

    // Split au premier = uniquement pour éviter de casser sur les & du contenu
    const eqIndex = raw.indexOf("=");
    if (eqIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Format invalide : aucun champ form trouvé", rawBody: raw.substring(0, 200) },
        { status: 400 }
      );
    }
    const content = decodeURIComponent(raw.substring(eqIndex + 1).replace(/\+/g, " "));

    let article: Partial<BlogPost>;
    try {
      article = extractJson(content) as Partial<BlogPost>;
    } catch {
      return NextResponse.json({
        debug: true,
        error: "extractJson a échoué",
        contentStart: content.substring(0, 300),
        contentLength: content.length,
        firstCharCode: content.charCodeAt(0),
        rawStart: raw.substring(0, 300),
        eqIndex,
      }, { status: 400 });
    }

    if (!article.title || !article.content || !article.slug || !article.excerpt) {
      return NextResponse.json(
        { success: false, message: "Champs requis manquants : title, excerpt, content, slug", received: Object.keys(article) },
        { status: 400 }
      );
    }

    const wordCount = article.content
      .replace(/<[^>]+>/g, "")
      .split(/\s+/)
      .filter(Boolean).length;

    const post: BlogPost = {
      slug: sanitizeSlug(article.slug),
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category ?? "Innovation",
      date: article.date ?? new Date().toISOString().split("T")[0],
      image: article.image ?? `/blog/${sanitizeSlug(article.slug)}.jpg`,
      readTime: `${Math.max(1, Math.round(wordCount / 200))} min`,
    };

    const redis = getRedis();
    await redis.set(`blog:post:${post.slug}`, post);
    await redis.zadd("blog:index", {
      score: new Date(post.date).getTime(),
      member: post.slug,
    });

    return NextResponse.json({ success: true, slug: post.slug, title: post.title });
  } catch (error) {
    console.error("[generate-blog error]", error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Erreur interne" },
      { status: 500 }
    );
  }
}
