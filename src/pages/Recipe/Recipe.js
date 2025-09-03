import CreateElement from "../../Component/CreateElement/CreateElement";
import Header from "../../Component/Header/Header";
import Append from "../../Component/Append/Append";
import Footer from "../../Component/Footer/Footer";

export default function Recipe() {
  const recipe = CreateElement({ name: "div" });
  const header = Header();
  const footer = Footer();

  Append(recipe, ...[header, footer]);

  return recipe;
}
