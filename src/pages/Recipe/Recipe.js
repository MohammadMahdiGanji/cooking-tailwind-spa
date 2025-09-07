import CreateElement from "../../Component/CreateElement/CreateElement";
import Header from "../../Component/Header/Header";
import Append from "../../Component/Append/Append";
import MainRecipes from "../../Component/MainRecipe/MainRecipe";
import Footer from "../../Component/Footer/Footer";
import NotFound from "../../Component/NotFound/NotFound";

export default function Recipe() {
  // create variables
  let recipe, header, main, footer;
  try {
    // create elements
    recipe = CreateElement({ name: "div" });
    header = Header();
    main = MainRecipes();
    footer = Footer();

    // add elements
    Append(recipe, ...[header, main, footer]);
  } catch (err) {
    NotFound(`Error Page Recipe ${err.message}`);
    throw new Error(`Error Page Recipe ${err.message}`);
  }

  return recipe;
}
