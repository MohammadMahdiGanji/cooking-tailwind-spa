import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import IntroductionRecupes from "../IntroductionRecipes/IntroductionRecipes";
import Ingredients from "../Ingredients/Ingredients";
import Direction from "../Directions/Directions";
import Delicious from "../Delicious/Delicious";

export default function MainRecipes() {
  const mainRecipes = CreateElement({ name: "main" });
  const introductionRecupes = IntroductionRecupes();
  const ingredients = Ingredients();
  const direction = Direction();
  const delicious = Delicious({
    count: 4,
    caption: "You may like these recipe too",
    text:""
  });

  Append(mainRecipes, ...[introductionRecupes, ingredients, direction, delicious]);

  return mainRecipes;
}
