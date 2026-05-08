import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

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

    const post = {
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category,
      date: data.date ?? new Date().toISOString().split("T")[0],
      image: data.image ?? `/blog/${data.slug}.jpg`,
      readTime,
    };

    const dir = path.join(process.cwd(), "public", "blog-posts");
    await mkdir(dir, { recursive: true });
    await writeFile(
      path.join(dir, `${data.slug}.json`),
      JSON.stringify(post, null, 2),
      "utf-8"
    );

    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    console.error("[Blog API error]", error);
    return NextResponse.json(
      { success: false, message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
