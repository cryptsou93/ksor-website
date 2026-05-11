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
  try {
    const buf = await request.arrayBuffer();
    const raw = Buffer.from(buf).toString("utf-8");
    const contentType = request.headers.get("content-type") ?? "";

    // Mode debug sans auth — retourne rawBody + decoded pour inspecter Make.com
    if (raw.includes("__debug__") || raw.trim() === "") {
      const decoded = decodeURIComponent(raw.replace(/^content=/, ""));
      return NextResponse.json({
        debug: true,
        contentType,
        rawBody: raw.substring(0, 500),
        decoded: decoded.substring(0, 500),
        rawLength: raw.length,
      });
    }

    const auth = request.headers.get("authorization");
    const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
    if (!token || token !== process.env.BLOG_SECRET_TOKEN) {
      return NextResponse.json({ success: false, message: "Non autorisé" }, { status: 401 });
    }

    // Parse tous les champs form-urlencoded pour voir ce qu'envoie Make.com
    const params = new URLSearchParams(raw);
    const allFields: Record<string, string> = {};
    params.forEach((v, k) => { allFields[k] = v.substring(0, 200); });

    console.log("[generate-blog] contentType:", contentType);
    console.log("[generate-blog] rawBody:", raw.substring(0, 300));
    console.log("[generate-blog] champs:", JSON.stringify(Object.keys(allFields)));

    // Retourne les champs reçus dans la réponse pour diagnostic Make.com
    if (Object.keys(allFields).length === 0 || !allFields.content) {
      return NextResponse.json({
        debug: true,
        message: "Champ 'content' absent — voici ce qui a été reçu",
        contentType,
        rawBody: raw.substring(0, 500),
        champsRecus: allFields,
      }, { status: 400 });
    }

    const decoded = allFields.content;

    // Tente d'extraire le JSON — retourne le contenu brut si ça échoue
    let article: Partial<BlogPost>;
    try {
      article = extractJson(decoded) as Partial<BlogPost>;
    } catch {
      return NextResponse.json({
        debug: true,
        message: "Impossible d'extraire le JSON du champ content",
        contentField: decoded.substring(0, 1000),
        contentLength: decoded.length,
        allFields,
      }, { status: 400 });
    }

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
