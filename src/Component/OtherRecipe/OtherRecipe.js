import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import NotFound from "../NotFound/NotFound";

export default function OtherRecipe({ title = "", data = "" } = {}) {
  // create variables
  let otherRecipe, caption, box, img, boxCaption, text, wrapper;

  try {
    // create Elements
    otherRecipe = CreateElement({
      name: "div",
      style: `flex flex-col gap-y-6`,
    });
    caption = CreateElement({ name: "h2", title: title });

    Append(otherRecipe, ...[caption]);
    data.forEach((item) => {
      box = CreateElement({ name: "div", style: `flex gap-2` });
      img = CreateElement({
        name: "img",
        src: item.img,
        style: `max-w-[100px] rounded-lg`,
      });
      wrapper = CreateElement({ name: "div" });
      boxCaption = CreateElement({
        name: "h4",
        title: item.title,
        style: `font-SemiBold text-xs line-clamp-2 mb-2`,
      });
      text = CreateElement({
        name: "p",
        title: item.text,
        style: `text-xs text-secondary`,
      });

      // add elements
      Append(box, ...[img, wrapper]);
      Append(wrapper, ...[boxCaption, text]);
      Append(otherRecipe, ...[box]);
    });
  } catch (err) {
    NotFound(`Error in Other Component ${err.message}`);
    throw new Error(`Error in Other Component ${err.message}`);
  }

  return otherRecipe;
}
