import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";

export default function ArticleList({ data = "" } = {}) {
  let articleList, article, img, wrapper, title, text, box, userBox, date;

  articleList = CreateElement({ name: "div" });

  data.forEach((item) => {
    article = CreateElement({ name: "div" });
    img = CreateElement({ name: "img", src: item.blogImg });
    wrapper = CreateElement({ name: "div" });
    title = CreateElement({ name: "h4", title: item.title });
    text = CreateElement({ name: "p", title: item.text });
    box = CreateElement({ name: "div" });
    userBox = CreateElement({ name: "div" });
    userImg = CreateElement({ name: "img", src: userIcon });
    userName = CreateElement({ name: "span", title: tiem.name });
    date = CreateElement({ name: "span", title: item.date });

    Append(article, ...[img, wrapper]);
    Append(wrapper, ...[title, text, box]);
    Append(box, ...[userBox, date]);
    Append(userBox, ...[userImg, userName]);
  });

  return articleList;
}
