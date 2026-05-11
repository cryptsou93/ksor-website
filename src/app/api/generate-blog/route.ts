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
    const contentType = request.headers.get("content-type") ?? "non défini";
    console.log("[generate-blog] Content-Type:", contentType);

    // Lecture du body brut pour déboguer
    const bodyText = await request.text();
    console.log("[generate-blog] Body brut (256 premiers chars):", bodyText.slice(0, 256));

    // Parsing form data depuis le texte brut
    const params = new URLSearchParams(bodyText);
    const allKeys = [...params.keys()];
    console.log("[generate-blog] Champs reçus:", allKeys);
    allKeys.forEach((k) => console.log(`[generate-blog]  ${k} =`, params.get(k)?.slice(0, 100)));

    const raw = params.get("content") ?? "";
    if (!raw) {
      return NextResponse.json(
        {
          success: false,
          message: "Champ 'content' manquant",
          contentType,
          champsRecus: allKeys,
          bodyBrut: bodyText.slice(0, 500),
        },
        { status: 400 }
      );
    }
    console.log("[generate-blog] Contenu extrait (100 premiers chars):", raw.slice(0, 100));
    const article = extractJson(raw) as Partial<BlogPost>;

    if (!article.title || !article.content || !article.slug || !article.excerpt) {
      return NextResponse.json(
        {
          success: false,
          message: "Champs requis manquants : title, excerpt, content, slug",
          received: Object.keys(article),
        },
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
      {
        success: false,
        message: error instanceof Error ? error.message : "Erreur interne",
      },
      { status: 500 }
    );
  }
}
