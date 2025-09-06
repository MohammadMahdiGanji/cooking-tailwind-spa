import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import NotFound from "../NotFound/NotFound";

export default function Ingredient({ title = "", data = "" } = {}) {
  let ingredient, caption, list, item, itemIcon, itemText, iconBox;

  try {
    ingredient = CreateElement({ name: "div", style: "mt-10" });
    caption = CreateElement({
      name: "h3",
      title: title,
      style:
        "font-SemiBold text-center xs:text-[20px] sm:text-left lg:text-base lg:text-[25px]",
    });
    list = CreateElement({ name: "div", style: `` });

    data.forEach((i) => {
      item = CreateElement({
        name: "div",
        style: `flex items-center justify-center gap-3 py-5 border-b-2 border-[rgba(0,0,0,0.05)] sm:justify-start`,
      });

      if (i.icon) {
        iconBox = CreateElement({
          name: "div",
          style: `w-4 h-4 bg-black flex items-center justify-center rounded-full`,
        });
        itemIcon = CreateElement({ name: "img", src: i.icon, style: "w-2" });
        itemText = CreateElement({
          name: "del",
          title: i.title,
          style: "text-secondary text-xs xs:text-sm lg:text-base",
        });

        Append(iconBox, itemIcon);
      } else {
        iconBox = CreateElement({
          name: "div",
          style: `w-4 h-4 rounded-full border-2 border-[rgba(0,0,0,0.2)]`,
        });

        itemText = CreateElement({
          name: "span",
          title: i.title,
          style: "text-xs xs:text-sm sm:text-base",
        });
      }

      Append(item, ...[iconBox, itemText]);
      Append(list, item);
    });

    Append(ingredient, ...[caption, list]);
  } catch (err) {
    NotFound(`Error Ingredient Component ${err.message}`);
    throw new Error(`Error Ingredient Component ${err.message}`);
  }

  return ingredient;
}
