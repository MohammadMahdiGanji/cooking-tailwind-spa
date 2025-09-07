import CreateElement from "../../Component/CreateElement/CreateElement";
import Append from "../../Component/Append/Append";
import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer";

export default function Blog() {

  const blog = CreateElement({name:'div'})
  const header = Header()
  const footer = Footer()

  Append(blog,...[header, footer])
  return blog;
}
