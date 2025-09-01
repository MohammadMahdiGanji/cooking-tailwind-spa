import breakfastSrc from "./assets/icon/breakfast.svg";
import veganSrc from "./assets/icon/vegan.svg";
import meatSrc from "./assets/icon/meat.svg";
import dessertSrc from "./assets/icon/Dessert.svg";
import linchSrc from "./assets/icon/lunch.svg";
import chocolateSrc from "./assets/icon/chocolate.svg";

export const dataMenu = [
  { title: "Home", link: "/" },
  { title: "Recipes", link: "/recipe" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
  { title: "About Us", link: "/about" },
];

export const dataCategory = [
  {
    icon: breakfastSrc,
    title: "Breakfast",
    color: "bg-linear-to-t from-[rgba(112,130,70,0.2)] to-[rgba(112,130,70,0)]",
  },
  {
    icon: veganSrc,
    title: "Vegan",

    color: "bg-linear-to-t from-[rgba(108,198,63,0.2)] to-[rgba(108,198,63,0)]",
  },
  {
    icon: meatSrc,
    title: "Meat",
    color: "bg-linear-to-t from-[rgba(204,38,27,0.2)] to-[rgba(204,38,27,0)]",
  },
  {
    icon: dessertSrc,
    title: "Dessert",
    color: "bg-linear-to-t from-[rgba(240,158,0,0.1)] to-[rgba(240,158,0,0)]",
  },
  {
    icon: linchSrc,
    title: "Lunch",
    color: "bg-linear-to-t from-[rgba(0,0,0,0.05)] to-[rgba(0,0,0,0.0)]",
  },
  {
    icon: chocolateSrc,
    title: "Chocolate",
    color: "bg-linear-to-t from-[rgba(0,0,0,0.05)] to-[rgba(0,0,0,0.0)]",
  },
];
