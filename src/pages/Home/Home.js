import CreateElement from "../../Component/CreateElement/CreateElement";
import Header from "../../Component/Header.js/Header";
import Append from "../../Component/Append/Append";

export default function Home() {
  const home = CreateElement({ name: "div" });

  Append(home,Header())

  return home;
}
