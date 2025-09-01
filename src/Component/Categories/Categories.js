import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Link from "../LInk/Link";
import Category from "../Category/Category";
import { dataCategory } from "../../data";
import NotFound from "../NotFound/NotFound";

// component Categories

export default function Categories() {
  // create variables
  let categories,
    content,
    container,
    categoriesHeader,
    categoriesHeaderTitle,
    categoriesHeaderBtn,
    categoriesHeaderLink,
    wrapper;

  try {
    // create elements
    categories = CreateElement({ name: "section", style: "mt-28" });

    content = CreateElement({ name: "div" });
    container = CreateElement({ name: "div", style: "container" });
    categoriesHeader = CreateElement({
      name: "div",
      style: `flex flex-col justify-center
         items-center gap-y-4 items-center
         xs:flex-row xs:justify-between`,
    });
    categoriesHeaderTitle = CreateElement({
      name: "h2",
      title: "Categories",
      style: "font-SemiBold text-[20px]",
    });
    categoriesHeaderBtn = CreateElement({
      name: "a",
      title: "View All Categories",
      style: "bg-primary px-5 py-3 rounded-xl cursor-pointer text-xs",
    });
    categoriesHeaderLink = Link({
      nt: categoriesHeaderBtn,
      href: "ldl",
    });
    wrapper = CreateElement({
      name: "div",
      style: `grid grid-cols-12 gap-y-12 mt-14 
        place-items-center  xs:gap-3 sm:gap-y-10 xl:gap-6`,
    });
  } catch (err) {}

  try {
    // append elements
    Append(categoriesHeader, ...[categoriesHeaderTitle, categoriesHeaderLink]);
    Append(container, content);
    dataCategory.forEach((data) => {
      const category = Category({
        icon: data.icon,
        color: data.color,
        title: data.title,
      });
      Append(wrapper, ...[category]);
    });
    Append(content, ...[categoriesHeader, wrapper]);
    Append(categories, container);
  } catch (err) {
    NotFound(`Error Append Category ${err}`);
    throw new Error(`Error Append Category ${err}`);
  }

  return categories;
}
