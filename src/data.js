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
import delicious1Src from "./assets/images/delicious1.png";
import delicious2Src from "./assets/images/delicious2.png";
import delicious3Src from "./assets/images/delicious3.png";
import delicious4Src from "./assets/images/delicious4.png";
import delicious5Src from "./assets/images/delicious5.png";
import delicious6Src from "./assets/images/delicious6.png";
import delicious7Src from "./assets/images/delicious7.png";
import delicious8Src from "./assets/images/delicious8.png";
import tickSrc from "./assets/icon/tick.svg";
import recipe5Src from "./assets/images/recipes5.png";
import recipe8Src from "./assets/images/recipes8.png";
import recipe7Src from "./assets/images/recipes7.png";
import directionSrc from "./assets/images/direction.png";
import user1Src from "./assets/images/user1.png";
import blog1Src from "./assets/images/blog1.png"
import blog2Src from "./assets/images/blog2.png"
import blog3Src from "./assets/images/blog3.png"
import blog4Src from "./assets/images/blog4.png"
import blog5Src from "./assets/images/blog5.png"
import blog6Src from "./assets/images/blog6.png"

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

export const dataDelicious = [
  {
    img: delicious1Src,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts ",
    icon: likeSrc,
  },
  {
    img: delicious2Src,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    icon: disLikeSrc,
  },
  {
    img: delicious3Src,
    title: "Healthy Japanese Fried Rice with Asparagus",
    icon: disLikeSrc,
  },
  {
    img: delicious4Src,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    icon: likeSrc,
  },
  {
    img: delicious5Src,
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    icon: disLikeSrc,
  },
  {
    img: delicious6Src,
    title: "Barbeque Spicy Sandwiches with Chips ",
    icon: disLikeSrc,
  },
  {
    img: delicious7Src,
    title: "Firecracker Vegan Lettuce Wraps - Spicy! ",
    icon: likeSrc,
  },
  {
    img: delicious8Src,
    title: "Chicken Ramen Soup with Mushroom ",
    icon: disLikeSrc,
  },
];

export const dataRecipeInformation = [
  { title: "Calories", info: "219.9 kcal" },
  { title: "Total Fat", info: "10.7 g" },
  { title: "Protein", info: "7.9 g" },
  { title: "Carbohydrate", info: "22.3 g" },
  { title: "Cholesterol", info: "37.4 mg" },
];

export const dataDish = [
  { title: "Lorem ipsum dolor sit amet", icon: tickSrc },
  { title: "Lorem ipsum dolor sit amet", icon: "" },
  { title: "Lorem ipsum dolor sit amet", icon: "" },
  { title: "Lorem ipsum dolor sit amet", icon: "" },
  { title: "Lorem ipsum dolor sit amet", icon: "" },
];

export const dataSauce = [
  { title: "Lorem ipsum dolor sit amet", icon: "" },
  { title: "Lorem ipsum dolor sit amet", icon: "" },
  { title: "Lorem ipsum dolor sit amet", icon: "" },
  { title: "Lorem ipsum dolor sit amet", icon: "" },
];

export const dataOtherRecipe = [
  {
    img: recipe5Src,
    title: "Chicken Meatball with Creamy Chees...",
    text: "By Andreas Paula",
  },
  {
    img: recipe8Src,
    title: "The Creamiest Creamy Chicken an...",
    text: "By Andreas Paula",
  },
  {
    img: recipe7Src,
    title: "The Best Easy One Pot Chicken and Rice",
    text: "By Andreas Paula",
  },
];

export const dataDirection = [
  {
    title: "1. Lorem ipsum dolor sit amet ",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    img: directionSrc,
  },
  {
    title: "2. Lorem ipsum dolor sit amet ",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    img: "",
  },
  {
    title: "3. Lorem ipsum dolor sit amet  ",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    img: "",
  },
];

export const dataArticle = [
  {
    blogImg: blog1Src,
    title: "Crochet Projects for Noodle Lovers",
    text: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    userIcon: user1Src,
    name: "Wade Warren",
    date: "12 November 2021",
  },
  {
    blogImg: blog2Src,
    title: "10 Vegetarian Recipes To Eat This Month",
    text: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    userIcon: user1Src,
    name: "Robert Fox",
    date: "12 November 2021",
  },
  {
    blogImg: blog3Src,
    title: "Full Guide to Becoming a Professional Chef",
    text: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    userIcon: user1Src,
    name: "Dianne Russell",
    date: "12 November 2021",
  },
  {
    blogImg: blog4Src,
    title: "Simple & Delicious Vegetarian Lasagna",
    text: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    userIcon: user1Src,
    name: "Leslie Alexander",
    date: "12 November 2021",
  },
  {
    blogImg: blog5Src,
    title: "Plantain and Pinto Stew with Aji Verde",
    text: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    userIcon: user1Src,
    name: "Courtney Henry",
    date: "12 November 2021",
  },
  {
    blogImg: blog6Src,
    title: "We’re Hiring a Communications Assistant!",
    text: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    userIcon: user1Src,
    name: "Albert Flores",
    date: "12 November 2021",
  },
];
