import CreateElement from "../../Component/CreateElement/CreateElement";
import Append from "../../Component/Append/Append";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import LandingBlog from "../../Component/LandingBlog/LandingBlog";
import BlogMain from "../../Component/BlogMain/BlogMain";
import NotFound from "../../Component/NotFound/NotFound";

export default function Blog() {
  // create variables
  let blog, header, landingBlog, blogMain, footer;

  try {
    // create elements
    blog = CreateElement({ name: "div" });
    header = Header();
    landingBlog = LandingBlog();
    blogMain = BlogMain();
    footer = Footer();

    // add elements
    Append(blog, ...[header, landingBlog, blogMain, footer]);
  } catch (err) {
    NotFound(`Error in blog page ${err.message}`)
    throw new Error(`Error in blog page ${err.message}`)
  }

  return blog;
}
