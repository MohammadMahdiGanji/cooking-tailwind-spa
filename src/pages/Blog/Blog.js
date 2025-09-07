import CreateElement from "../../Component/CreateElement/CreateElement";
import Append from "../../Component/Append/Append";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import LandingBlog from "../../Component/LandingBlog/LandingBlog";
import BlogMain from "../../Component/BlogMain/BlogMain";

export default function Blog() {
  const blog = CreateElement({ name: "div" });
  const header = Header();
  const landingBlog = LandingBlog();
  const blogMain = BlogMain()
  const footer = Footer();


  Append(blog, ...[header, landingBlog, blogMain, footer]);
  return blog;
}
