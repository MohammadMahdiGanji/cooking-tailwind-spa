import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import TimerSrc from "../../assets/icon/Timer.svg";
import chickenSrc from "../../assets/icon/ForkKnife.svg";
import userSec from "../../assets/images/user1.png";
import printerSrc from "../../assets/icon/printer.svg";
import shaereSrc from "../../assets/icon/share.svg";
import NotFound from "../NotFound/NotFound";
import posetrVidioSrc from "../../assets/images/bannerRecipe.png";
import playSrc from "../../assets/icon/playCircle.svg";
import { dataRecipeInformation } from "../../data";

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
    shareWrapper,
    shareBox,
    shareText,
    shareIcon,
    content,
    videoBox,
    video,
    playIcon,
    information,
    informationTitle,
    infromationList,
    informationItem,
    informationName,
    informationValue,
    informationText,
    introductionText;

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
       flex-col divide-[rgba(0,0,0,0.3)]  sm:divide-y-0 sm:mt-5 lg:place-items-center sm:content-center
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
      style: "text-xs md:text-base font-SemiBold",
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
      style: "bg-primary inline-block p-4 rounded-full cursor-pointer",
    });
    printIcon = CreateElement({ name: "img", src: printerSrc });
    printText = CreateElement({
      name: "p",
      title: "PRINT",
      style: "text-center text-xs xs:text-sm md:text-base",
    });

    shareWrapper = CreateElement({ name: "div", style: "inline-block" });
    shareBox = CreateElement({
      name: "div",
      style: "bg-primary inline-block p-4 rounded-full cursor-pointer",
    });
    shareText = CreateElement({
      name: "p",
      title: "SHARE",
      style: "text-center text-xs xs:text-sm md:text-base",
    });
    shareIcon = CreateElement({ name: "img", src: shaereSrc });

    content = CreateElement({
      name: "div",
      style: "mt-15 grid grid-cols-12 gap-y-8 gap-3 lg:gap-8",
    });

    videoBox = CreateElement({ name: "div", style: "relative col-span-12 sm:col-span-7 lg:col-span-8" });
    video = CreateElement({
      name: "video",
      poster: posetrVidioSrc,
      style: "rounded-3xl object-cover w-full h-full",
    });
    playIcon = CreateElement({
      name: "img",
      src: playSrc,
      style:
        "absolute top-0 w-[50px]  xs:w-[70px] lg:w-[100px] bottom-0 right-0 left-0 m-auto cursor-pointer",
    });

    information = CreateElement({
      name: "div",
      style: "bg-primary col-span-12 rounded-3xl p-5 flex flex-col sm:col-span-5 lg:col-span-4",
    });
    informationTitle = CreateElement({
      name: "h4",
      title: "Nutrition Information",
      style: "font-SemiBold xs:text-[20px] lg:text-[25px]",
    });
    infromationList = CreateElement({ name: "div", style:"mb-3" });

    informationText = CreateElement({
      name: "p",
      title:
        "adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        style:"mt-auto text-secondary text-center text-xs line-clamp-2 xs:text-sm xl:text-base"
    });

    introductionText = CreateElement({
      name: "p",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      style:'text-secondary text-justify text-xs mt-8 md:text-sm xl:text-base'
     });

    // add elements
    Append(IntroductionRecipes, container);
    Append(container, ...[header, content, introductionText]);
    Append(header, ...[headerContent, headerBox]);
    Append(headerContent, ...[title, headerList]);
    Append(headerList, ...[headerUser, prepTime, cookTime, chicken]);
    Append(headerBox, ...[printWrapper, shareWrapper]);
    Append(headerUser, ...[headerUserImg, headerUserBox]);
    Append(headerUserBox, ...[headerUserCaption, headerUserText]);
    Append(printBox, printIcon);
    Append(printWrapper, ...[printBox, printText]);
    Append(shareBox, shareIcon);
    Append(shareWrapper, ...[shareBox, shareText]);
    Append(content, ...[videoBox, information]);
    Append(videoBox, ...[video, playIcon]);
    Append(information, informationTitle);

    dataRecipeInformation.forEach((item) => {
      informationItem = CreateElement({
        name: "div",
        style: "flex justify-between py-5 border-b-1 border-[rgba(0,0,0,0.2)] text-xs xs:text-sm xl:text-base",
      });
      informationName = CreateElement({
        name: "span",
        title: item.title,
        style: "text-secondary font-Medium text-xs  xs:text-sm xl:text-base",
      });
      informationValue = CreateElement({
        name: "span",
        title: item.info,
        style: "font-SemiBold",
      });
      Append(informationItem, ...[informationName, informationValue]);
      Append(infromationList, informationItem);
    });
    Append(information, infromationList);
    Append(information, informationText);
  } catch (err) {
    NotFound(`Error introduction Section ${err}`);
    throw new Error(`Error introduction Section ${err}`);
  }

  return IntroductionRecipes;
}
