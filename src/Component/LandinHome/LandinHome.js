import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import hotRecipeSrc from "../../assets/icon/recipes.svg";
import minutesSrc from "../../assets/icon/Timer.svg";
import forkknifeSrc from "../../assets/icon/Forkknife.svg";
import bannerSrc from "../../assets/images/bannerLandingHome.png";
import Button from "../Button/Button";
import PleySrc from "../../assets/icon/PlayCircle.svg";
import user from "../../assets/images/user1.png";
import NotFound from "../../Component/NotFound/NotFound";

// component landing home
export default function LandingHome() {
  // create vriables
  let Landing,
    cntainer,
    wrapper,
    landingContent,
    landingBanner,
    landingBannerImg,
    hotRecipeBox,
    hotRecipeImg,
    hotRecipeText,
    landingTitle,
    landingCaption,
    landingBox,
    landingMinutesBox,
    landingMinutesImg,
    LandingMinutesText,
    landingChickenBox,
    landingChickenText,
    landingChickenImg,
    landingBottom,
    userBox,
    userImg,
    userContent,
    userName,
    userDate,
    button;

  try {
    // create elements
    Landing = CreateElement({ name: "div" });

    // container landing
    cntainer = CreateElement({ name: "div", style: "container" });

    // wrapper landing
    wrapper = CreateElement({
      name: "div",
      style: `mt-6 rounded-[40px] overflow-hidden w-full
  md:flex `,
    });

    // content landing section
    landingContent = CreateElement({
      name: "div",
      style: "basis-full bg-primary p-8 flex flex-col",
    });

    // banner landing section
    landingBanner = CreateElement({ name: "div", style: "basis-full" });
    landingBannerImg = CreateElement({
      name: "img",
      alt: "banner",
      src: bannerSrc,
      style: "object-cover w-full h-full",
    });

    // hotRecipe landing section
    hotRecipeBox = CreateElement({
      name: "div",
      style: `flex gap-4 bg-white h-10 w-40 rounded-3xl justify-center 
    items-center mx-auto md:ml-0 md: md:h-12 md:w-44`,
    });
    hotRecipeImg = CreateElement({
      name: "img",
      alt: "recipe",
      src: hotRecipeSrc,
    });
    hotRecipeText = CreateElement({
      name: "span",
      title: "Hot Recipes",
      style: "text-xs font-SemiBold md:text-sm",
    });

    // title landing section
    landingTitle = CreateElement({
      name: "h1",
      title: "Spicy delicious chicken wings",
      style: `text-[20px] font-SemiBold mt-6 text-center
   xs:text-[35px] sm:text-[40px] md:text-left lg:text-[50px] 
   lg:leading-[60px] xl:text-[60px] xl:leading-[75px] `,
    });

    // caption landing section
    landingCaption = CreateElement({
      name: "p",
      title:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      style: `mt-4 text-secondary text-xs xs:text-sm line-clamp-3 text-center
  md:text-left xl:text-base`,
    });

    // details landing section
    landingBox = CreateElement({
      name: "div",
      style: `flex flex-col items-center mt-8 gap-4
  sm:flex-row justify-center md:justify-start`,
    });
    landingMinutesBox = CreateElement({
      name: "div",
      style: `flex bg-[rgba(0,0,0,0.07)] gap-2
  items-center justify-center  rounded-3xl
   font-Medium text-secondary py-2 px-3 
   xs:py-3 xs:px-5 `,
    });
    landingMinutesImg = CreateElement({
      name: "img",
      alt: "minutes",
      src: minutesSrc,
      style: "w-5",
    });
    LandingMinutesText = CreateElement({
      name: "span",
      title: "30 Minutes",
      style: "text-xs xs:text-sm",
    });
    landingChickenBox = CreateElement({
      name: "div",
      style: `flex bg-[rgba(0,0,0,0.07)] gap-2
  items-center justify-center rounded-3xl
   font-Medium text-secondary py-2 px-3 
   xs:py-3 xs:px-5 `,
    });
    landingChickenText = CreateElement({
      name: "span",
      title: "Chicken",
      style: "text-xs xs:text-sm",
    });
    landingChickenImg = CreateElement({
      name: "img",
      alt: "Chicken",
      src: forkknifeSrc,
      style: "w-5",
    });

    // bottom lannding section
    landingBottom = CreateElement({
      name: "div",
      style: `flex flex-col justify-center items-center mt-16 gap-5
  sm:flex-row md:justify-start xl:mt-30`,
    });
    userBox = CreateElement({
      name: "div",
      style: "flex gap-5 items-center",
    });
    userImg = CreateElement({ name: "img", src: user });
    userContent = CreateElement({ name: "div", style: "flex flex-col" });
    userName = CreateElement({
      name: "span",
      title: "John Smith",
      style: "text-xs",
    });
    userDate = CreateElement({
      name: "span",
      title: "15 March 2022",
      style: "text-xs",
    });
    button = Button({
      title: "View Recipes",
      icon: PleySrc,
      style: "md:text-xs",
    });
  } catch (err) {
    NotFound("Error create landing section");
    throw new Error(`Errore create Landing section ${err.message}`);
  }

  try {
    Append(Landing, cntainer);
    Append(cntainer, wrapper);
    Append(wrapper, ...[landingContent, landingBanner]);
    Append(hotRecipeBox, ...[hotRecipeImg, hotRecipeText]);
    Append(landingMinutesBox, ...[landingMinutesImg, LandingMinutesText]);
    Append(landingChickenBox, ...[landingChickenImg, landingChickenText]);
    Append(landingBox, ...[landingMinutesBox, landingChickenBox]);
    Append(landingBanner, landingBannerImg);
    Append(userBox, ...[userImg, userContent]);
    Append(userContent, ...[userName, userDate]);
    Append(landingBottom, ...[userBox, button]);
    Append(
      landingContent,
      ...[hotRecipeBox, landingTitle, landingCaption, landingBox, landingBottom]
    );
  } catch (err) {
    NotFound("Error append landing section");
    throw new Error(`Errore append Landing section ${err.message}`);
  }

  // append elements

  return Landing;
}
