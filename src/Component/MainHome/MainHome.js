import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Categories from "../Categories/Categories";

export default function MainHome() {
  const main = CreateElement({ name: "main" });

  const categories = Categories();

  Append(main, categories);

  return main;
}
