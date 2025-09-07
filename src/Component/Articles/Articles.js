import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import { dataArticle } from "../../data";
import ArticleList from "../ArticleList/ArticleList";
import OtherRecipe from "../OtherRecipe/OtherRecipe";
import { dataOtherRecipe } from "../../data";
import foodSrc from "../../assets/images/food.png";

export default function Articles() {
  let articles,
    container,
    wrapper,
    article,
    recipe,
    articleList,
    otherRecipe,
    imgFood;

  articles = CreateElement({ name: "section", style: "mt-20" });
  container = CreateElement({ name: "div", style: "container" });
  wrapper = CreateElement({ name: "div", style: "grid grid-cols-12 gap-5" });
  article = CreateElement({
    name: "article",
    style: "col-span-12 lg:col-span-8",
  });
  recipe = CreateElement({ name: "div", style: "col-span-12 lg:col-span-4" });
  articleList = ArticleList({ data: dataArticle });
  otherRecipe = OtherRecipe({
    title: "Tasty Recipes",
    data: dataOtherRecipe,
    style: `sm:items-start sm:max-w-[500px] lg:max-w-[300px] sm:mt-8 lg:mt-0`,
  });
  imgFood = CreateElement({
    name: "img",
    src: foodSrc,
    style: "max-w-[350px] lg:max-w-[300px] block mx-auto  mt-10 lg:mt-16",
  });

  Append(articles, container);
  Append(container, wrapper);
  Append(wrapper, ...[article, recipe]);
  Append(article, articleList);
  Append(recipe, ...[otherRecipe, imgFood]);

  return articles;
}
