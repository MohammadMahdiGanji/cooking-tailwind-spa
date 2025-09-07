import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import { dataArticle } from "../../data";
import ArticleList from "../ArticleList/ArticleList";

export default function Articles() {
  let articles, container, wrapper, article, recipe, articleList;

  articles = CreateElement({ name: "section" });
  container = CreateElement({ name: "div", style: "container" });
  wrapper = CreateElement({ name: "div", style:"grid grid-cols-12" });
  article = CreateElement({ name: "article", style:"col-span-12 lg:col-span-8" });
  recipe = CreateElement({ name: "div" });
  articleList = ArticleList({ data: dataArticle });

  Append(articles, container);
  Append(container, wrapper);
  Append(wrapper, ...[article, recipe]);
  Append(article, articleList);

  return articles;
}
