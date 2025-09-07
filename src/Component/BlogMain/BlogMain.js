import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Articles from "../Articles/Articles";
import Inbox from "../Inbox/Inbox";
import NotFound from "../NotFound/NotFound";

export default function BlogMain() {
  // create vairables
  let blogMain, articles, inbox;

  try {
    // create elements
    blogMain = CreateElement({ name: "main" });
    articles = Articles();
    inbox = Inbox();

    // add elements
    Append(blogMain, ...[articles, inbox]);
  } catch (err) {
    NotFound(`Error main secion blog page ${err.message}`);
    throw new Error(`Error main secion blog page ${err.message}`);
  }

  return blogMain;
}
