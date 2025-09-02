import breakfastSrc from "./assets/icon/breakfast.svg";
import veganSrc from "./assets/icon/vegan.svg";
import meatSrc from "./assets/icon/meat.svg";
import dessertSrc from "./assets/icon/Dessert.svg";
import linchSrc from "./assets/icon/lunch.svg";
import chocolateSrc from "./assets/icon/chocolate.svg";
import recipes1Src from "./assets/images/recipes1.png";
import recipes2Src from "./assets/images/recipes2.png";
import recipes3Src from "./assets/images/recipes3.png";
import recipes4Src from "./assets/images/recipes4.png";
import recipes5Src from "./assets/images/recipes5.png";
import recipes6Src from "./assets/images/recipes6.png";
import recipes7Src from "./assets/images/recipes7.png";
import recipes8Src from "./assets/images/recipes8.png";
import likeSrc from "./assets/icon/heartlike.svg";
import disLikeSrc from "./assets/icon/heartdislike.svg";
import post1 from "./assets/images/svg/Post1.svg";
import post2 from "./assets/images/svg/Post2.svg";
import post3 from "./assets/images/svg/Post3.svg";
import post4 from "./assets/images/svg/Post4.svg";

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

export const dataRecipes = [
  {
    img: recipes1Src,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    icon: likeSrc,
  },
  {
    img: recipes2Src,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    icon: disLikeSrc,
  },
  {
    img: recipes3Src,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    icon: disLikeSrc,
  },
  {
    img: recipes4Src,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    icon: likeSrc,
  },
  {
    img: recipes5Src,
    title: "Chicken Meatballs with Cream Cheese",
    icon: disLikeSrc,
  },
  {
    img: recipes6Src,
    title: "Fruity Pancake with Orange & Blueberry",
    icon: disLikeSrc,
  },
  {
    img: recipes7Src,
    title: "The Best Easy One Pot Chicken and Rice",
    icon: likeSrc,
  },
  {
    img: recipes8Src,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    icon: disLikeSrc,
  },
  {
    img: recipes1Src,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    icon: disLikeSrc,
  },
];

export const dataSocial = [post1, post2, post3, post4];
