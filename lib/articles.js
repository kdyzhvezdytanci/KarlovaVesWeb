import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getAllArticles() {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const categoryFolders = fs.readdirSync(contentDirectory, {
    withFileTypes: true,
  });

  const articles = [];

  for (const categoryFolder of categoryFolders) {
    if (!categoryFolder.isDirectory()) {
      continue;
    }

    const categoryPath = path.join(
      contentDirectory,
      categoryFolder.name
    );

    const filenames = fs
      .readdirSync(categoryPath)
      .filter((filename) => filename.endsWith(".md"));

    for (const filename of filenames) {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(categoryPath, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      articles.push({
        slug,
        folder: categoryFolder.name,
        ...data,
      });
    }
  }

  return articles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}

export function getArticleBySlug(slug) {
  if (!fs.existsSync(contentDirectory)) {
    return null;
  }

  const categoryFolders = fs.readdirSync(contentDirectory, {
    withFileTypes: true,
  });

  for (const categoryFolder of categoryFolders) {
    if (!categoryFolder.isDirectory()) {
      continue;
    }

    const fullPath = path.join(
      contentDirectory,
      categoryFolder.name,
      `${slug}.md`
    );

    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        folder: categoryFolder.name,
        ...data,
        content,
      };
    }
  }

  return null;
}

