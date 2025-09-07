import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Articles from "../Articles/Articles";
import Inbox from "../Inbox/Inbox";

export default function BlogMain() {
  let blogMain, articles,inbox;

  blogMain = CreateElement({ name: "main" });
  articles = Articles();
  inbox = Inbox()

  Append(blogMain, ...[articles, inbox]);

  return blogMain;
}
