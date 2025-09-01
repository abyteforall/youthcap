import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import fs from "node:fs";
import path from "node:path";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export default function ArticlePage({ params }: Params) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  // Resolve content file path; default to content/articles/<slug>.txt
  const contentPath =
    article.contentPath ||
    path.join(process.cwd(), "content", "articles", `${article.slug}.txt`);
  let raw = "";
  try {
    // If contentPath is relative, make it absolute from project root
    const abs = path.isAbsolute(contentPath)
      ? contentPath
      : path.join(process.cwd(), contentPath);
    raw = fs.readFileSync(abs, "utf-8");
  } catch {
    raw = "";
  }

  const hasDouble = /\n{2,}/.test(raw);
  const sep = hasDouble ? /\n{2,}/ : /\n+/; // fallback to single-line breaks if no blank lines
  const paragraphs = raw
    .split(sep)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          {article.name}
        </h1>
        <div className="text-gray-600 mb-8 space-y-1">
          <p>
            Written by{" "}
            <span className="font-medium text-gray-800">
              {article.writtenBy}
            </span>
          </p>
          <p className="text-sm">
            Researched by{" "}
            <span className="font-medium text-gray-700">
              {article.researchedBy}
            </span>
          </p>
          <p className="text-xs">{article.date}</p>
        </div>

        {paragraphs.length > 0 ? (
          <article className="prose prose-lg max-w-none space-y-6">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg">
            <p>This article content isn\'t available yet on the site.</p>
            <p className="mt-2 text-sm">
              Add a .txt file at content/articles/{article.slug}.txt
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
