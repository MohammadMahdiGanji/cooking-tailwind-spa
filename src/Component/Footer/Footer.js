import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import MenuDesktop from "../MenuDesktop/MenuDesktop";
import logoSrc from "../../assets/icon/logo.svg";
import tiwtterSrc from "../../assets/icon/twitter.svg";
import facebookSrc from "../../assets/icon/facebook.svg";
import instagramdarkSrc from "../../assets/icon/instagramdark.svg";
import { dataMenu } from "../../data.js";
import NotFound from "../NotFound/NotFound.js";

export default function Footer() {
  // create variables
  let footer,
    container,
    wrapper,
    footerTop,
    footerBottom,
    logo,
    menu,
    caption,
    content,
    text,
    social,
    tiwtter,
    facebook,
    instagram,
    span;

  try {
    // create elements
    footer = CreateElement({ name: "footer", style: "mt-28" });
    container = CreateElement({ name: "div", style: "container" });
    wrapper = CreateElement({ name: "div" });
    footerTop = CreateElement({
      name: "div",
      style:
        "text-center md:flex md:justify-between md:text-left md:items-center",
    });
    footerBottom = CreateElement({
      name: "div",
      style: `flex flex-col-reverse justify-center items-center
         mt-10 gap-y-3 py-8 border-t border-[rgba(0,0,0,0.2)] md:flex-row md:justify-between`,
    });
    content = CreateElement({ name: "div" });
    logo = CreateElement({
      name: "img",
      src: logoSrc,
      style: "mx-auto md:mr-auto md:ml-0",
    });
    caption = CreateElement({
      name: "h4",
      title: "Lorem ipsum dolor sit amet, consectetuipisicing elit, ",
      style: "mt-4 text-secondary text-xs xs:text-base ",
    });
    menu = MenuDesktop({
      list: dataMenu,
      style:
        "flex flex-col mt-5 text-center gap-y-2 md:flex-row md:mt-0 gap-3 lg:gap-8 xl:gap-12",
    });
    social = CreateElement({
      name: "div",
      style: "flex gap-5  justify-center md:basis-1/3 md:justify-end",
    });
    tiwtter = CreateElement({ name: "img", src: tiwtterSrc });
    facebook = CreateElement({ name: "img", src: facebookSrc });
    instagram = CreateElement({ name: "img", src: instagramdarkSrc });
    span = CreateElement({
      name: "span",
      style: "text-[#FF7967]",
      title: "Mohammad Mahdi",
    });
    text = CreateElement({
      name: "p",
      title: ``,
      style:
        "text-center inline-block text-xs xs:text-base md:text-right md:inline-block md:ml-auto md:basis-1/2",
    });

    // add elements
    Append(footer, container);
    Append(container, wrapper);
    Append(wrapper, ...[footerTop, footerBottom]);
    Append(footerTop, ...[content, menu]);
    Append(content, ...[logo, caption]);
    Append(footerBottom, ...[text, social]);
    Append(social, ...[tiwtter, facebook, instagram]);
    Append(text, "© 2025 ");
    Append(text, span);
    Append(text, ". Made with focus, fueled by coffee!");
  } catch (err) {
    NotFound(`Error Footer Section ${err.message}`);
    throw new Error(`Error Footer Section ${err.message}`);
  }
  return footer;
}
