import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import IntroductionRecupes from "../IntroductionRecipes/IntroductionRecipes";
import Ingredients from "../Ingredients/Ingredients";
import Direction from "../Directions/Directions";
import Delicious from "../Delicious/Delicious";
import NotFoune from "../NotFound/NotFound";

export default function MainRecipes() {
  // create variables
  let mainRecipes, introductionRecupes, ingredients, direction, delicious;
  try {
    // create elements
    mainRecipes = CreateElement({ name: "main" });
    introductionRecupes = IntroductionRecupes();
    ingredients = Ingredients();
    direction = Direction();
    delicious = Delicious({
      count: 4,
      caption: "You may like these recipe too",
      text: "",
    });

    // add elements
    Append(
      mainRecipes,
      ...[introductionRecupes, ingredients, direction, delicious]
    );
  } catch (err) {
    NotFoune(`Error Main Recipe Section to Page Recipe ${err.message}`);
    throw new Error(`Error Main Recipe Section to Page Recipe ${err.message}`);
  }

  return mainRecipes;
}
