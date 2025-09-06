import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import { dataDish } from "../../data";
import Ingredient from "../Ingredient/Ingredient";
import { dataSauce } from "../../data";
import OtherRecipe from "../OtherRecipe/OtherRecipe";
import { dataOtherRecipe } from "../../data";
import foodSrc from "../../assets/images/food.png";
import NotFound from "../NotFound/NotFound";

export default function Ingredients() {

  // create variables
  let ingredients,
    container,
    wrapper,
    sectionIngredient,
    sectionRecipe,
    dishIngredient,
    ingredientTitle,
    sauceIngredient,
    foodImg,
    otherRecipe;

  try {

    // create Elements
    ingredients = CreateElement({ name: "section", style: "mt-18" });
    container = CreateElement({ name: "div", style: "container" });
    wrapper = CreateElement({
      name: "div",
      style: "sm:grid sm:grid-cols-12 sm:gap-5 xl:gap-10",
    });

    sectionIngredient = CreateElement({
      name: "div",
      style: "col-span-6 md:col-span-7 xl:col-span-9",
    });
    ingredientTitle = CreateElement({
      name: "h2",
      title: "Ingredient",
      style: "font-Bold text-center text-[30px] sm:text-left xl:text-[35px]",
    });
    sectionRecipe = CreateElement({
      name: "div",
      style: "col-span-6 md:col-span-5 xl:col-span-3",
    });
    dishIngredient = Ingredient({ title: "For main dish", data: dataDish });
    sauceIngredient = Ingredient({ title: "For the sauce", data: dataSauce });
    otherRecipe = OtherRecipe({
      title: "other Recipes",
      data: dataOtherRecipe,
    });
    foodImg = CreateElement({
      name: "img",
      src: foodSrc,
      style: "w-full mx-auto max-w-[300px] mt-10 xl:mt-20",
    });

    // add elements
    Append(ingredients, container);
    Append(container, wrapper);
    Append(wrapper, ...[sectionIngredient, sectionRecipe]);
    Append(
      sectionIngredient,
      ...[ingredientTitle, dishIngredient, sauceIngredient]
    );
    Append(sectionRecipe, ...[otherRecipe, foodImg]);
  } catch (err) {
    NotFound(`Error Ingredient component ${err.message}`);
    throw new Error(`Error Ingredient section ${err.message}`);
  }

  return ingredients;
}
