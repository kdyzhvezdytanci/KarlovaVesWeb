import { getAllArticles } from "../lib/articles";
import KarlovkaClient from "./KarlovkaClient";

export default function HomePage() {
  const articles = getAllArticles();

  return <KarlovkaClient articles={articles} />;
}
