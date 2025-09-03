import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Categories from "../Categories/Categories";
import RecipesHome from "../RecipesHome/RecipesHome";
import Chef from "../../Component/Chef/Chef";
import Social from "../Social/Social";
import Delicious from "../Delicious/Delicious";

export default function MainHome() {
  const main = CreateElement({ name: "main" });

  const categories = Categories();
  const recipesHome = RecipesHome();
  const chef = Chef();
  const social = Social();
  const delicious = Delicious(8);

  Append(main, ...[categories, recipesHome, chef, social, delicious]);

  return main;
}
