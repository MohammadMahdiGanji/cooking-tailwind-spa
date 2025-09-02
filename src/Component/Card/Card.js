import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import timerSrc from "../../assets/icon/Timer.svg";
import ForkKnifeSrc from "../../assets/icon/ForkKnife.svg";
import NotFound from "../NotFound/NotFound";

export default function Card({
  img = "",
  caption = "",
  icon = "",
  color = "",
} = {}) {
  // Create Variables
  let Card,
    image,
    boxIcon,
    like,
    title,
    box,
    munitesBox,
    munitesIcon,
    munitesText,
    healthyBox,
    healthyIcon,
    healthyText;
  try {
    
    // Create Elements
    Card = CreateElement({
      name: "div",
      style: `p-4 ${color} relative rounded-2xl pb-6 max-w-[400px]`,
    });
    image = CreateElement({
      name: "img",
      src: img,
      style: "w-full rounded-2xl object-cover",
    });
    boxIcon = CreateElement({
      name: "span",
      style: `absolute top-8 right-8 bg-white w-12
      h-12 flex items-center justify-center rounded-full`,
    });
    like = CreateElement({ name: "img", src: icon });
    title = CreateElement({
      name: "h3",
      title: caption,
      style: "font-SemiBold mt-5 md:text-[22px]",
    });

    box = CreateElement({
      name: "div",
      style: "flex itmes-center gap-5 mt-9",
    });

    munitesBox = CreateElement({ name: "div", style: "flex gap-2" });
    munitesIcon = CreateElement({ name: "img", src: timerSrc });
    munitesText = CreateElement({
      name: "span",
      title: "Minutes",
      style: "text-xs md:text-base font-Medium",
    });

    healthyBox = CreateElement({ name: "div", style: "flex gap-2" });
    healthyIcon = CreateElement({ name: "img", src: ForkKnifeSrc });
    healthyText = CreateElement({
      name: "span",
      title: "Healthy",
      style: "text-xs md:text-base font-Medium",
    });

    // add element
    Append(Card, ...[image, boxIcon, title, box]);
    Append(boxIcon, like);
    Append(box, ...[munitesBox, healthyBox]);
    Append(munitesBox, ...[munitesIcon, munitesText]);
    Append(healthyBox, ...[healthyIcon, healthyText]);
  } catch (err) {
    NotFound(`Error Card Section ${err.message}`);
    throw new Error(`Error Card Section ${err.message}`);
  }

  return Card;
}
