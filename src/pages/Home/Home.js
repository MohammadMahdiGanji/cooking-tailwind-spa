import CreateElement from "../../Component/CreateElement/CreateElement";
import Header from "../../Component/Header/Header";
import Append from "../../Component/Append/Append";

export default function Home() {
  const home = CreateElement({ name: "div" });
  const header = Header();

  Append(home, ...[header]);

  return home;
}
