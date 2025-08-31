import CreateElement from "../../Component/CreateElement/CreateElement";
import Append from "../../Component/Append/Append";
import Header from "../../Component/Header/Header";
import LandingHome from "../../Component/LandinHome/LandinHome";

export default function Home() {
  const home = CreateElement({ name: "div" });
  const header = Header();
  const landing = LandingHome();

  Append(home, ...[header, landing]);

  return home;
}
