import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";

export default function Articles() {
  let articles, container, wrapper, article, recipe;

  articles = CreateElement({ name: "section" });
  container = CreateElement({ name: "div", style: "container" });
  wrapper = CreateElement({ name: "div" });
  article = CreateElement({ name: "article" });
  recipe = CreateElement({ name: "div" });

  Append(articles, container);
  Append(container, wrapper);
  Append(wrapper, ...[article, recipe]);

  return articles;
}
