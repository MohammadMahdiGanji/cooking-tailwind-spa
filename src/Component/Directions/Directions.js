import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import { dataDirection } from "../../data";
import NotFound from "../NotFound/NotFound";

export default function Direction() {
  // create variables
  let direction,
    container,
    wrapper,
    title,
    caption,
    img,
    description,
    box,
    wrapperCaption,
    circle,
    content,
    empty;

  try {
    // create elements
    direction = CreateElement({ name: "section" });
    container = CreateElement({
      name: "div",
      style: "container grid grid-cols-12",
    });
    wrapper = CreateElement({
      name: "div",
      style: "col-span-12 lg:col-span-7 xl:col-span-9 xl:gap-5",
    });
    empty = CreateElement({
      name: "div",
      style: "col-span-12 lg:col-span-5 lg:col-span-3",
    });
    title = CreateElement({
      name: "h3",
      title: "Directions",
      style:
        "text-center font-Bold mt-20 text-[20px] xs:text-[25px] sm:text-left sm:text-[30px] md:text-[35px]",
    });

    Append(direction, container);
    Append(container, ...[wrapper, empty]);
    Append(wrapper, title);

    dataDirection.forEach((item) => {
      content = CreateElement({
        name: "div",
        style: "py-7 border-b-2 border-[rgba(0,0,0,0.1)] lg:py-10 xl:py-12",
      });
      wrapperCaption = CreateElement({
        name: "div",
        style:
          "flex gap-3 items-center justify-center sm:justify-start sm:gap-5",
      });
      circle = CreateElement({
        name: "div",
        style:
          "w-4 h-4 rounded-full border-2 border-[rgba(0,0,0,0.3)] sm:w-6 sm:h-6",
      });
      caption = CreateElement({
        name: "h3",
        title: item.title,
        style: "text-xs font-SemiBold xs:text-[22px]",
      });

      box = CreateElement({ name: "div", style: "sm:pl-10" });
      item.img &&
        (img = CreateElement({
          name: "img",
          src: item.img,
          style: "w-full mt-6",
        }));
      description = CreateElement({
        name: "p",
        title: item.description,
        style:
          "text-xs text-secondary text-justify mt-6 md:text-sm xl:text-base",
      });

      if (item.img) {
        Append(box, img);
      }

      // add elements
      Append(box, description);
      Append(wrapperCaption, ...[circle, caption]);
      Append(content, ...[wrapperCaption, box]);
      Append(wrapper, content);
    });
  } catch (err) {
    NotFound(`Error in Direction Component ${err.msssage}`);
    throw new Error(`Error in Direction Component ${err.msssage}`);
  }

  return direction;
}
