import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import NotFound from "../NotFound/NotFound";

export default function ArticleList({ data = "" } = {}) {
  // create variables
  let articleList,
    article,
    img,
    wrapper,
    title,
    text,
    box,
    userBox,
    date,
    userImg,
    userName;

  try {
    //  create elelemnts
    articleList = CreateElement({
      name: "div",
      style: " flex flex-col gap-y-5 items-center xs:gap-y-6",
    });

    data.forEach((item) => {
      article = CreateElement({
        name: "div",
        style: "max-w-[400px] sm:max-w-full sm:flex sm:gap-5",
      });
      img = CreateElement({
        name: "img",
        src: item.blogImg,
        style: "rounded-xl w-full sm:max-w-[290px] ",
      });
      wrapper = CreateElement({ name: "div" });
      title = CreateElement({
        name: "h4",
        title: item.title,
        style: "font-SemiBold text-xs mt-2 xs:text-base sm:mt-0 md:text-[20px]",
      });
      text = CreateElement({
        name: "p",
        title: item.text,
        style:
          "text-xs text-secondary mt-2 line-clamp-3 sm:text-sm lg:text-base",
      });
      box = CreateElement({
        name: "div",
        style: `mt-3 flex flex-col gap-2 sm:gap-3 divide-y-1 divide-[rgba(0,0,0,0.1)]
       sm:flex-row sm:divide-x-1 sm:divide-y-0 sm:items-center md:mt-10  xl:mt-14`,
      });
      userBox = CreateElement({
        name: "div",
        style: "flex gap-1 items-center pb-2 sm:pb-0 pr-3 sm:gap-3",
      });
      userImg = CreateElement({
        name: "img",
        src: item.userIcon,
        style: "w-6 h-6 sm:w-10 sm:h-10",
      });
      userName = CreateElement({
        name: "span",
        title: item.name,
        style: "text-xs font-SemiBold sm:text-sm",
      });
      date = CreateElement({
        name: "span",
        title: item.date,
        style: "text-xs text-secondary sm:text-sm",
      });

      // add elements
      Append(articleList, article);
      Append(article, ...[img, wrapper]);
      Append(wrapper, ...[title, text, box]);
      Append(box, ...[userBox, date]);
      Append(userBox, ...[userImg, userName]);
    });
  } catch (err) {
    NotFound(`Error Article List Component ${err.message}`);
    throw new Error(`Error Article List Component ${err.message}`);
  }

  return articleList;
}
