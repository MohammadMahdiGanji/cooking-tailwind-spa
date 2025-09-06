import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import { dataDish } from "../../data";
import Ingredient from "../Ingredient/Ingredient";

export default function Ingredients() {
  let ingredients,
    container,
    wrapper,
    sectionIngredient,
    sectionRecipe,
    dishIngredient;

  ingredients = CreateElement({ name: "section" });
  container = CreateElement({ name: "div", style: "container" });
  wrapper = CreateElement({ name: "div" });
  sectionIngredient = CreateElement({ name: "div" });
  sectionRecipe = CreateElement({ name: "div" });
  dishIngredient = Ingredient({ title: "For main dish", data: dataDish });

  Append(ingredients, container);
  Append(container, wrapper);
  Append(wrapper, ...[sectionIngredient, sectionRecipe]);
  Append(sectionIngredient, dishIngredient);

  console.log(ingredients);
  return ingredients;
}
