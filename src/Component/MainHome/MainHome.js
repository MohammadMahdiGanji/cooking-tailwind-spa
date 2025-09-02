import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Categories from "../Categories/Categories";
import RecipesHome from "../RecipesHome/RecipesHome";

export default function MainHome() {
  const main = CreateElement({ name: "main" });

  const categories = Categories();
  const recipesHome = RecipesHome();

  Append(main, ...[categories, recipesHome]);

  return main;
}
