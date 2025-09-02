import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import chefSrc from "../../assets/images/chef.png";
import Button from "../Button/Button";
import Link from "../LInk/Link";
import NotFound from "../NotFound/NotFound";

export default function Chef() {
  // create variables
  let chef, container, wrapper, content, banner, title, caption, img, btn, link;

  try {
    // create elements
    chef = CreateElement({ name: "section", style: "mt-28" });
    container = CreateElement({ name: "div", style: "container" });
    wrapper = CreateElement({
      name: "div",
      style: "flex flex-col gap-y-10 sm:flex-row items-end",
    });
    content = CreateElement({
      name: "div",
      style: "basis-[45%]  flex flex-col",
    });
    banner = CreateElement({ name: "div", style: "basis-[55%]" });
    title = CreateElement({
      name: "h2",
      title: "Everyone can be a chef in their own kitchen",
      style: `text-[20px] font-SemiBold text-center text-[25px] 
      sm:text-left sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[48px]`,
    });
    caption = CreateElement({
      name: "p",
      title:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      style: `text-secondary mt-5 text-xs line-clamp-2 
      text-center sm:text-left lg:text-base lg:line-clamp-3 xl:mt-10`,
    });
    img = CreateElement({ name: "img", src: chefSrc, style: "w-full" });
    btn = Button({
      title: "Learn More",
      style: "mt-10 mx-auto sm:ml-0 lg:mt-18 xl:mt-25",
    });
    link = Link({ element: btn, href: "55" });

    // add elements
    Append(chef, container);
    Append(container, wrapper);
    Append(wrapper, ...[content, banner]);
    Append(content, ...[title, caption, link]);
    Append(banner, img);
  } catch (err) {
    NotFound(`Error Chef Section ${err.message}`);
    throw new Error(`Error Chef Section ${err.message}`);
  }

  return chef;
}
