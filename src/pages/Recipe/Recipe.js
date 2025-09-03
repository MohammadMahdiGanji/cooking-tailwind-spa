import CreateElement from "../../Component/CreateElement/CreateElement";
import Header from "../../Component/Header/Header";
import Append from "../../Component/Append/Append";
import MainRecipes from "../../Component/MainRecipe/MainRecipe";
import Footer from "../../Component/Footer/Footer";

export default function Recipe() {
  const recipe = CreateElement({ name: "div" });
  const header = Header();
  const main = MainRecipes();
  const footer = Footer();

  Append(recipe, ...[header, main, footer]);

  return recipe;
}
