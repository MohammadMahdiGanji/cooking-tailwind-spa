import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import { dataSocial } from "../../data";
import Button from "../Button/Button";
import instagramSrc from "../../assets/icon/instagram.svg";
import Link from "../LInk/Link";
import NotFound from "../NotFound/NotFound";

export default function Social() {
  // create variables
  let social, container, title, caption, wrapper, btnBox, btn, link;
  try {
    // create elements
    social = CreateElement({
      name: "section",
      style: "bg-gradient-to-t from-primary to-white mt-28 pb-15",
    });

    container = CreateElement({ name: "div", style: "container" });

    title = CreateElement({
      name: "h2",
      title: "Check out @foodieland on Instagram",
      style:
        "text-center font-SemiBold xs:text-[22px] sm:text-[30px] md:text-[35px] lg:text-[48px]",
    });

    caption = CreateElement({
      name: "p",
      title:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      style:
        "text-center max-w-[840px] mx-auto text-secondary mt-3 text-xs lg:text-sm xl:text-base",
    });

    wrapper = CreateElement({
      name: "div",
      style: `grid gap-y-10 grid-cols-12 place-items-center 
        sm:gap-5 mt-8 sm:mt-12 md:mt-18 lx:gap-10`,
    });

    btnBox = CreateElement({ name: "div", style: "flex " });

    btn = Button({
      title: "Visit Our Instagram",
      icon: instagramSrc,
      style: "mx-auto text-center mt-15 ",
    });

    link = Link({ element: btn, href: 777 });

    // append elements
    Append(social, container);
    Append(btnBox, link);
    Append(container, ...[title, caption, wrapper, btnBox]);
    dataSocial.forEach((item) => {
      const post = CreateElement({
        name: "img",
        src: item,
        style:
          "w-full max-w-[400px] col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3",
        alt: "social",
      });

      Append(wrapper, post);
    });
  } catch (err) {
    NotFound(`Error Social Section ${err.message}`);
    throw new Error(`Error Social Section ${err.message}`);
  }

  return social;
}
