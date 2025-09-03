import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import IntroductionRecupes from "../IntroductionRecipes/IntroductionRecipes";

export default function MainRecipes() {
  const mainRecipes = CreateElement({ name: "main" });
  const introductionRecupes = IntroductionRecupes();

  Append(mainRecipes, introductionRecupes);

  return mainRecipes;
}
