import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import { dataDelicious } from "../../data";
import Card from "../Card/Card";
import NotFound from "../NotFound/NotFound";

export default function Delicious({
  count = "",
  text = "",
  caption = "",
} = {}) {
  let delicious, container, header, title, description, wrapper;
  try {
    delicious = CreateElement({ name: "section", style: "mt-28" });
    container = CreateElement({ name: "div", style: "container" });

    if (text) {
      header = CreateElement({
        name: "div",
        style: "text-center md:flex md:text-left  xl:gap-30 justify-between",
      });
      title = CreateElement({
        name: "h2",
        title: caption,
        style:
          "font-SemiBold xs:text-[22px] md:text-[30px] basis-1/2 lg:text-[40px] xl:text-[48px]",
      });
      description = CreateElement({
        name: "p",
        title: text,
        style:
          "text-secondary text-xs line-clamp-2 mt-4 basis-1/2 lg:text-sm xl:text-base",
      });
      Append(header, ...[title, description]);
    } else {
      console.log(77);
      header = CreateElement({
        name: "div",
        style: " ",
      });
      title = CreateElement({
        name: "h2",
        title: caption,
        style:
          "font-SemiBold xs:text-[22px] md:text-[30px] basis-1/2 lg:text-[36px] xl:text-[40px] text-center ",
      });
      Append(header, title);
    }

    wrapper = CreateElement({
      name: "div",
      style: "mt-8 grid grid-cols-12 place-items-center",
    });

    Append(delicious, container);
    Append(container, ...[header, wrapper]);
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
