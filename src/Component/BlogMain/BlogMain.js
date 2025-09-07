import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Articles from "../Articles/Articles";

export default function BlogMain() {
  let blogMain, articles;

  blogMain = CreateElement({ name: "main" });
  articles = Articles();

  Append(blogMain, ...[articles]);

  return blogMain;
}
