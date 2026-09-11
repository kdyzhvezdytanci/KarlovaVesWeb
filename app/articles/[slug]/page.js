import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const contentDir = path.join(process.cwd(), "content");
  const categories = fs.readdirSync(contentDir);

  let articlePath = null;

  for (const category of categories) {
    const candidate = path.join(
      contentDir,
      category,
      `${slug}.md`
    );

    if (fs.existsSync(candidate)) {
      articlePath = candidate;
      break;
    }
  }

  if (!articlePath) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">
          Article not found
        </h1>
      </main>
    );
  }

  const fileContents = fs.readFileSync(articlePath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-4 text-5xl font-bold">
        {data.title}
      </h1>

      <div className="mb-8 text-sm text-gray-500">
        {data.category} • {data.date}
      </div>

      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          classx-w-none"
        dangerouslySetInnerHTML={{
          __html: contentHtml,
        }}
      />
    </main>
  );
}
