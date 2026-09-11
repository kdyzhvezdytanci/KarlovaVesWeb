import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

// Get all articles for homepage
export function getAllArticles() {
  const filenames = fs.readdirSync(contentDirectory);

  const articles = filenames.map((filename) => {
    const slug = filename.replace(".md", "");

    const fullPath = path.join(contentDirectory, filename);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}

// Get one article by slug
export function getArticleBySlug(slug) {
  const fullPath = path.join(
    contentDirectory,
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}
