import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import IntroductionRecupes from "../IntroductionRecipes/IntroductionRecipes";
import Ingredients from "../Ingredients/Ingredients";
import Direction from "../Directions/Directions";

export default function MainRecipes() {
  const mainRecipes = CreateElement({ name: "main" });
  const introductionRecupes = IntroductionRecupes();
  const ingredients = Ingredients();
  const direction = Direction();

  Append(mainRecipes, ...[introductionRecupes, ingredients, direction]);

  return mainRecipes;
}
