import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import NotFound from "../NotFound/NotFound";

export default function OtherRecipe({ title = "", data = "", style = "" } = {}) {
  // create variables
  let otherRecipe, caption, box, img, boxCaption, text, wrapper;

  try {
    // create Elements
    otherRecipe = CreateElement({
      name: "div",
      style: `flex flex-col gap-y-6 w-full max-w-[300px] mx-auto ${style}`,
    });
    caption = CreateElement({ name: "h2", title: title, style:`font-Bold mt-10 text-center 
    xs:text-[20px] sm:mt-0  sm:text-left lg:text-[30px] xl:text-[35px]` });

    Append(otherRecipe, ...[caption]);
    data.forEach((item) => {
      box = CreateElement({ name: "div", style: `flex gap-2 justify-center` });
      img = CreateElement({
        name: "img",
        src: item.img,
        style: `max-w-[100px] rounded-lg xs:max-w-[135px]`,
      });
      wrapper = CreateElement({ name: "div" });
      boxCaption = CreateElement({
        name: "h4",
        title: item.title,
        style: `font-SemiBold text-xs line-clamp-2 mb-2 xs:text-sm`,
      });
      text = CreateElement({
        name: "p",
        title: item.text,
        style: `text-xs text-secondary xs:text-sm`,
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
