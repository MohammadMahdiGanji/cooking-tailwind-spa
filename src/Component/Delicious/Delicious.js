import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import { dataDelicious } from "../../data";
import Card from "../Card/Card";
import NotFound from "../NotFound/NotFound";

export default function Delicious(count) {
  let delicious, container, header, title, caption, wrapper;
  try {
    delicious = CreateElement({ name: "section", style: "mt-28" });
    container = CreateElement({ name: "div", style: "container" });
    header = CreateElement({
      name: "div",
      style: "text-center md:flex md:text-left  xl:gap-30 justify-between",
    });
    title = CreateElement({
      name: "h2",
      title: "Try this delicious recipe to make your day",
      style:
        "font-SemiBold xs:text-[22px] md:text-[30px] basis-1/2 lg:text-[40px] xl:text-[48px]",
    });
    caption = CreateElement({
      name: "p",
      title:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      style:
        "text-secondary text-xs line-clamp-2 mt-4 basis-1/2 lg:text-sm xl:text-base",
    });
    wrapper = CreateElement({
      name: "div",
      style: "mt-8 grid grid-cols-12 place-items-center",
    });

    Append(delicious, container);
    Append(container, ...[header, wrapper]);
    Append(header, ...[title, caption]);
    dataDelicious.slice(0, count).forEach((item) => {
      const box = Card({
        icon: item.icon,
        caption: item.title,
        img: item.img,
        style: "bg-white col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3",
      });

      Append(wrapper, box);
    });
  } catch (err) {
    NotFound(`Error Delicious Section ${err.message}`);
    throw new Error(`Error Delicious Section ${err.message}`);
  }

  return delicious;
}
