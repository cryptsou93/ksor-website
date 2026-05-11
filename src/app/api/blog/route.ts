import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Redis } from "@upstash/redis";
import type { BlogPost } from "@/lib/blog-data";

let _redis: Redis | null = null;
function getRedis() {
  if (!_redis) _redis = Redis.fromEnv();
  return _redis;
}

const postSchema = z.object({
  title: z.string().min(5, "Le titre doit comporter au moins 5 caractères"),
  excerpt: z.string().min(10, "L'extrait doit comporter au moins 10 caractères"),
  content: z.string().min(20, "Le contenu doit comporter au moins 20 caractères"),
  category: z.string().min(2, "La catégorie est requise"),
  slug: z
    .string()
    .regex(
      /^[a-z0-9-]+$/,
      "Le slug ne doit contenir que des lettres minuscules, chiffres et tirets"
    ),
  date: z.string().optional(),
  image: z.string().optional(),
});

// ── GET — liste tous les articles dynamiques ──────────────────────────────────
export async function GET() {
  try {
    const redis = getRedis();
    const slugs = await redis.zrange<string[]>("blog:index", 0, -1, {
      rev: true,
    });

    if (!slugs || slugs.length === 0) {
      return NextResponse.json({ success: true, posts: [], count: 0 });
    }

    const posts = await redis.mget<(BlogPost | null)[]>(
      ...slugs.map((s) => `blog:post:${s}`)
    );
    const validPosts = posts.filter((p): p is BlogPost => p !== null);

    return NextResponse.json({
      success: true,
      posts: validPosts,
      count: validPosts.length,
    });
  } catch (error) {
    console.error("[Blog GET error]", error);
    return NextResponse.json(
      { success: false, message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}

// ── POST — crée un article ────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;

  if (!token || token !== process.env.BLOG_SECRET_TOKEN) {
    return NextResponse.json(
      { success: false, message: "Non autorisé" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const data = postSchema.parse(body);

    const wordCount = data.content
      .replace(/<[^>]+>/g, "")
      .split(/\s+/)
      .filter(Boolean).length;
    const readTime = `${Math.max(1, Math.round(wordCount / 200))} min`;

    const post: BlogPost = {
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category,
      date: data.date ?? new Date().toISOString().split("T")[0],
      image: data.image ?? `/blog/${data.slug}.jpg`,
      readTime,
    };

    const redis = getRedis();
    await redis.set(`blog:post:${post.slug}`, post);
    await redis.zadd("blog:index", {
      score: new Date(post.date).getTime(),
      member: post.slug,
    });

    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    console.error("[Blog POST error]", error);
    return NextResponse.json(
      { success: false, message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
