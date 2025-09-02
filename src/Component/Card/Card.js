import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import timerSrc from "../../assets/icon/Timer.svg";
import ForkKnifeSrc from "../../assets/icon/ForkKnife.svg";

export default function Card({
  img = "",
  caption = "",
  icon = "",
  color = "",
} = {}) {
  const Card = CreateElement({
    name: "div",
    style: `p-4 ${color} relative rounded-2xl pb-6 max-w-[400px]`,
  });
  const image = CreateElement({
    name: "img",
    src: img,
    style: "w-full rounded-2xl object-cover",
  });
  const boxIcon = CreateElement({
    name: "span",
    style: `absolute top-8 right-8 bg-white w-12
    h-12 flex items-center justify-center rounded-full`,
  });
  const like = CreateElement({ name: "img", src: icon });
  const title = CreateElement({
    name: "h3",
    title: caption,
    style: "font-SemiBold mt-5 md:text-[22px]",
  });

  const box = CreateElement({
    name: "div",
    style: "flex itmes-center gap-5 mt-9",
  });

  const munitesBox = CreateElement({ name: "div", style: "flex gap-2" });
  const munitesIcon = CreateElement({ name: "img", src: timerSrc });
  const munitesText = CreateElement({
    name: "span",
    title: "Minutes",
    style: "text-xs md:text-base font-Medium",
  });

  const healthyBox = CreateElement({ name: "div", style: "flex gap-2" });
  const healthyIcon = CreateElement({ name: "img", src: ForkKnifeSrc });
  const healthyText = CreateElement({
    name: "span",
    title: "Healthy",
    style: "text-xs md:text-base font-Medium",
  });

  Append(Card, ...[image, boxIcon, title, box]);
  Append(boxIcon, like);
  Append(box, ...[munitesBox, healthyBox]);
  Append(munitesBox, ...[munitesIcon, munitesText]);
  Append(healthyBox, ...[healthyIcon, healthyText]);

  return Card;
}
