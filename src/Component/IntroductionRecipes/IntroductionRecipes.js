import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import TimerSrc from "../../assets/icon/Timer.svg";
import chickenSrc from "../../assets/icon/ForkKnife.svg";
import userSec from "../../assets/images/user1.png";
import printerSrc from "../../assets/icon/printer.svg";
import shaereSrc from "../../assets/icon/share.svg";
import NotFound from "../NotFound/NotFound";

function time({ title = "", icon = "", text = "" } = {}) {
  let timeElem, img, box, caption, txt;

  timeElem = CreateElement({
    name: "div",
    style:
      "inline-flex gap-3 items-center py-6 col-span-12 sm:col-span-6 sm:py-0 lg:col-span-3 lg:px-10",
  });
  img = CreateElement({ name: "img", src: icon });
  box = CreateElement({ name: "div" });
  caption = CreateElement({
    name: "h4",
    title: title,
    style: "font-SemiBold text-xs xs:text-sm",
  });
  txt = CreateElement({
    name: "span",
    title: text,
    style: "text-secondary text-xs xs:text-sm md:text-base",
  });

  Append(timeElem, ...[img, box]);
  Append(box, ...[caption, txt]);
  return timeElem;
}

export default function IntroductionRecupes() {
  // create variables
  let IntroductionRecipes,
    container,
    header,
    headerContent,
    headerBox,
    title,
    headerList,
    headerUser,
    headerUserImg,
    headerUserBox,
    headerUserCaption,
    headerUserText,
    prepTime,
    cookTime,
    chicken,
    printWrapper,
    printBox,
    printText,
    printIcon,
    shaereWrapper,
    shaereBox,
    shaereText,
    shaereIcon;

  try {
    // create elements
    IntroductionRecipes = CreateElement({ name: "section", style: "mt-16" });

    container = CreateElement({ name: "div", style: "container" });

    header = CreateElement({ name: "div", style: "sm:flex justify-between" });

    headerContent = CreateElement({ name: "div" });

    title = CreateElement({
      name: "h1",
      title: "Health Japanese Fried Rice",
      style:
        "font-SemiBold text-center xs:text-[20px] sm:text-left sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[55px]",
    });

    headerList = CreateElement({
      name: "div",
      style: `divide-y-1 grid grid-cols-12 place-items-center
       flex-col divide-[rgba(0,0,0,0.3)]  sm:divide-y-0 sm:mt-5 items-center content-center
        md:place-items-start lg:divide-x-1 lg:mt-10 sm: sm:gap-5 ls:gap-0`,
    });

    headerUser = CreateElement({
      name: "div",
      style:
        "flex gap-3 items-center py-6 col-span-12 sm:col-span-6 sm:py-0 lg:col-span-3 lg:pr-10",
    });
    headerUserImg = CreateElement({ name: "img", src: userSec });
    headerUserBox = CreateElement({ name: "div" });
    headerUserCaption = CreateElement({
      name: "h4",
      title: "John Smith ",
      style: "text-xs md:text-base",
    });
    headerUserText = CreateElement({
      name: "span",
      title: "15 March 2022",
      style: "text-xs md:text-base text-secondary",
    });

    prepTime = time({
      title: "PREP TIME",
      text: "15 Minutes",
      icon: TimerSrc,
      alt: "timer",
    });
    cookTime = time({
      title: "COOK TIME",
      text: "15 Minutes",
      icon: TimerSrc,
      alt: "timer",
    });
    chicken = time({ text: "Chicken", icon: chickenSrc });

    headerBox = CreateElement({
      name: "div",
      style: "flex flex gap-x-5 justify-center",
    });

    printWrapper = CreateElement({ name: "div", style: "inline-block" });
    printBox = CreateElement({
      name: "div",
      style: "bg-primary inline-block p-4 rounded-full",
    });
    printIcon = CreateElement({ name: "img", src: printerSrc });
    printText = CreateElement({
      name: "p",
      title: "PRINT",
      style: "text-center text-xs xs:text-sm md:text-base",
    });

    shaereWrapper = CreateElement({ name: "div", style: "inline-block" });
    shaereBox = CreateElement({
      name: "div",
      style: "bg-primary inline-block p-4 rounded-full",
    });
    shaereText = CreateElement({
      name: "p",
      title: "SHARE",
      style: "text-center text-xs xs:text-sm md:text-base",
    });
    shaereIcon = CreateElement({ name: "img", src: shaereSrc });

    // add elements
    Append(IntroductionRecipes, container);
    Append(container, header);
    Append(header, ...[headerContent, headerBox]);
    Append(headerContent, ...[title, headerList]);
    Append(headerList, ...[headerUser, prepTime, cookTime, chicken]);
    Append(headerBox, ...[printWrapper, shaereWrapper]);
    Append(headerUser, ...[headerUserImg, headerUserBox]);
    Append(headerUserBox, ...[headerUserCaption, headerUserText]);
    Append(printBox, printIcon);
    Append(printWrapper, ...[printBox, printText]);
    Append(shaereBox, shaereIcon);
    Append(shaereWrapper, ...[shaereBox, shaereText]);
  } catch (err) {
    NotFound(`Error introduction Section ${err}`);
    throw new Error(`Error introduction Section ${err}`);
  }

  return IntroductionRecipes;
}
