import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import hotRecipeSrc from "../../assets/icon/recipes.svg";
import minutesSrc from "../../assets/icon/Timer.svg";
import forkknifeSrc from "../../assets/icon/Forkknife.svg";
import bannerSrc from "../../assets/images/bannerLandingHome.png";
import Button from "../Button/Button";
import PleySrc from "../../assets/icon/PlayCircle.svg";
import user from "../../assets/images/user1.png";

export default function LandingHome() {
  const Landing = CreateElement({ name: "div" });
  const cntainer = CreateElement({ name: "div", style: "container" });
  const wrapper = CreateElement({
    name: "div",
    style: "mt-6 rounded-[40px] overflow-hidden",
  });
  const landingContent = CreateElement({
    name: "div",
    style: "basis-1/2 bg-primary p-8 flex flex-col",
  });
  const landingBanner = CreateElement({ name: "div", style: "basis-1/2" });
  const landingBannerImg = CreateElement({
    name: "img",
    alt: "banner",
    src: bannerSrc,
  });
  const hotRecipeBox = CreateElement({
    name: "div",
    style:
      "flex gap-4 bg-white h-10 w-40 rounded-3xl justify-center items-center",
  });
  const hotRecipeImg = CreateElement({
    name: "img",
    alt: "recipe",
    src: hotRecipeSrc,
  });
  const hotRecipeText = CreateElement({
    name: "span",
    title: "Hot Recipes",
    style: "text-sm font-SemiBold",
  });
  const landingTitle = CreateElement({
    name: "h1",
    title: "Spicy delicious chicken wings",
    style: "text-[30px] font-SemiBold mt-6 text-center",
  });
  const landingCaption = CreateElement({
    name: "p",
    title:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
    style: "mt-4 text-secondary text-xs line-clamp-3 text-center",
  });

  const landingBox = CreateElement({
    name: "div",
    style: "flex flex-col items-center mt-8 gap-6",
  });
  const landingMinutesBox = CreateElement({
    name: "div",
    style: `flex bg-[rgba(0,0,0,0.07)] gap-2
    items-center justify-center  rounded-3xl
     font-Medium text-secondary py-2 px-3`,
  });
  const landingMinutesImg = CreateElement({
    name: "img",
    alt: "minutes",
    src: minutesSrc,
    style: "w-5",
  });
  const LandingMinutesText = CreateElement({
    name: "span",
    title: "30 Minutes",
    style: "text-xs",
  });

  const landingChickenBox = CreateElement({
    name: "div",
    style: `flex bg-[rgba(0,0,0,0.07)] gap-2
    items-center justify-center rounded-3xl
     font-Medium text-secondary py-2 px-3 `,
  });
  const landingChickenText = CreateElement({
    name: "span",
    title: "Chicken",
    style: "text-xs",
  });
  const landingChickenImg = CreateElement({
    name: "img",
    alt: "Chicken",
    src: forkknifeSrc,
    style: "w-5",
  });

  const landingBottom = CreateElement({
    name: "div",
    style: "flex flex-col justify-center items-center mt-16 gap-5",
  });
  const userBox = CreateElement({ name: "div", style: "flex gap-5" });
  const userImg = CreateElement({ name: "img", src: user });
  const userContent = CreateElement({ name: "div", style: "flex flex-col" });
  const userName = CreateElement({ name: "span", title: "John Smith" });
  const userDate = CreateElement({ name: "span", title: "15 March 2022" });
  const button = Button({ title: "View Recipes", icon: PleySrc });

  Append(Landing, cntainer);
  Append(cntainer, wrapper);
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

  return Landing;
}
