import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import IntroductionRecupes from "../IntroductionRecipes/IntroductionRecipes";
import Ingredients from "../Ingredients/Ingredients";

export default function MainRecipes() {
  const mainRecipes = CreateElement({ name: "main" });
  const introductionRecupes = IntroductionRecupes();
  const ingredients = Ingredients();

  Append(mainRecipes, ...[introductionRecupes, ingredients]);

  return mainRecipes;
}
