import CreateElement from "../../Component/CreateElement/CreateElement";
import Append from "../../Component/Append/Append";
import Header from "../../Component/Header/Header";
import LandingHome from "../../Component/LandinHome/LandinHome";
import MainHome from "../../Component/MainHome/MainHome";
import Chef from "../../Component/Chef/Chef";

export default function Home() {
  const home = CreateElement({ name: "div" });

  const header = Header();
  const landing = LandingHome();
  const mainHome = MainHome();
  const chef = Chef();

  Append(home, ...[header, landing, mainHome, chef]);

  return home;
}
