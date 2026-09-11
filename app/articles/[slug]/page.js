import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

const contentDirectory = path.join(process.cwd(), "content");

function findArticlePath(slug) {
  if (!fs.existsSync(contentDirectory)) {
    return null;
  }

  const categories = fs.readdirSync(contentDirectory, {
    withFileTypes: true,
  });

  for (const category of categories) {
    if (!category.isDirectory()) {
      continue;
    }

    const candidate = path.join(
      contentDirectory,
      category.name,
      `${slug}.md`
    );

    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return null;
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const articlePath = findArticlePath(slug);

  if (!articlePath) {
    notFound();
  }

  const fileContents = fs.readFileSync(articlePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
      <header className="mb-10">
        <p className="mb-4 text-xs uppercase tracking-[0.18em] text-black/50">
          {data.category}
        </p>

        <h1 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
          {data.title}
        </h1>

        <div className="mt-6 flex gap-4 text-sm text-black/50">
          {data.date && <span>{data.date}</span>}
          {data.readTime && <span>{data.readTime}</span>}
        </div>
      </header>

      {data.image && (
        <img
          src={data.image}
          alt={data.imageAlt || data.title}
          classdium leading-relaxed sm:text-2xl">
          {data.excerpt}
        </p>
      )}

      <article
        className="article-content space-y-6 text-[1.05rem] leading-8 text-black/70"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
