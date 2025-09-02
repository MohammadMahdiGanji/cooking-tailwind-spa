import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Card from "../Card/Card";
import recipes1Src from "../../assets/images/recipes1.png";
import likeSrc from "../../assets/icon/heartlike.svg";
import { dataRecipes } from "../../data";

export default function RecipesHome() {
  const recipe = CreateElement({ name: "section", style: "mt-28" });
  const container = CreateElement({ name: "div", style: "container" });
  const wrapper = CreateElement({ name: "div" });
  const header = CreateElement({ name: "div", style: "text-center" });
  const title = CreateElement({
    name: "h2",
    title: "Simple and tasty recipes",
    style: " font-SemiBold xs:text-[26px] sm:text-[35px] lg:text-[45px]",
  });
  const cpation = CreateElement({
    name: "p",
    title:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
    style:
      "max-w-[500px] mx-auto text-secondary mt-2 text-xs line-clamp-2 sm:text-sm lg:text-base lg:max-w-[706px] ",
  });

  const recipes = CreateElement({
    name: "div",
    style: "mt-10 gap-y-8 grid grid-cols-12 place-items-center sm:gap-6",
  });

  Append(recipe, container);
  Append(container, wrapper);
  Append(wrapper, header, recipes);
  Append(header, ...[title, cpation]);
  dataRecipes.forEach((recipe) => {
    const box = Card({
      img: recipe.img,
      caption: recipe.title,
      icon: recipe.icon,
      color:
        "bg-gradient-to-t from-primary to-white col-span-12 sm:col-span-6 lg:col-span-4",
    });

    Append(recipes, box);
  });

  return recipe;
}
