import CreateElement from "../../Component/CreateElement/CreateElement";
import Append from "../../Component/Append/Append";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import LandingBlog from "../../Component/LandingBlog/LandingBlog";

export default function Blog() {
  const blog = CreateElement({ name: "div" });
  const header = Header();
  const footer = Footer();
  const landingBlog = LandingBlog();

  Append(blog, ...[header, landingBlog, footer]);
  return blog;
}
