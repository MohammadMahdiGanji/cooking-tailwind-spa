import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Categories from "../Categories/Categories";
import RecipesHome from "../RecipesHome/RecipesHome";
import Chef from "../../Component/Chef/Chef";
import Social from "../Social/Social";
import Delicious from "../Delicious/Delicious";
import Inbox from "../Inbox/Inbox";
import NotFound from "../NotFound/NotFound";

export default function MainHome() {
  // create variables
  let main, categories, recipesHome, chef, social, delicious, inbox;
  // create elements
  try {
    main = CreateElement({ name: "main" });
    categories = Categories();
    recipesHome = RecipesHome();
    chef = Chef();
    social = Social();
    delicious = Delicious({
      count: 8,
      caption: "Try this delicious recipeto make your day",
      text: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
    });
    inbox = Inbox();

    // add elements
    Append(main, ...[categories, recipesHome, chef, social, delicious, inbox]);
  } catch (err) {
    NotFound(`Error Main Home Section ${err.message}`);
    throw new Error(`Error Main Home Section ${err.message}`);
  }

  return main;
}
