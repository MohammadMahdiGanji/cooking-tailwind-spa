import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Categories from "../Categories/Categories";
import RecipesHome from "../RecipesHome/RecipesHome";
import Chef from "../../Component/Chef/Chef";
import Social from "../Social/Social";

export default function MainHome() {
  const main = CreateElement({ name: "main" });

  const categories = Categories();
  const recipesHome = RecipesHome();
  const chef = Chef();
  const social = Social();

  Append(main, ...[categories, recipesHome, chef, social]);

  return main;
}
