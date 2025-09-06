import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import { dataDish } from "../../data";
import Ingredient from "../Ingredient/Ingredient";
import { dataSauce } from "../../data";
import OtherRecipe from "../OtherRecipe/OtherRecipe";
import { dataOtherRecipe } from "../../data";

export default function Ingredients() {
  let ingredients,
    container,
    wrapper,
    sectionIngredient,
    sectionRecipe,
    dishIngredient,
    ingredientTitle,
    sauceIngredient,
    otherRecipe;

  ingredients = CreateElement({ name: "section", style: "mt-18" });
  container = CreateElement({ name: "div", style: "container" });
  wrapper = CreateElement({ name: "div" });

  sectionIngredient = CreateElement({ name: "div" });
  ingredientTitle = CreateElement({
    name: "h2",
    title: "Ingredient",
    style: "font-Bold text-[30px]",
  });
  sectionRecipe = CreateElement({ name: "div" });
  dishIngredient = Ingredient({ title: "For main dish", data: dataDish });
  sauceIngredient = Ingredient({ title: "For the sauce", data: dataSauce });
  otherRecipe = OtherRecipe({
    title: "other Recipes",
    data: dataOtherRecipe,
  });

  Append(ingredients, container);
  Append(container, wrapper);
  Append(wrapper, ...[sectionIngredient, sectionRecipe]);
  Append(
    sectionIngredient,
    ...[ingredientTitle, dishIngredient, sauceIngredient]
  );
  Append(sectionRecipe, otherRecipe)

  console.log(ingredients);
  return ingredients;
}
