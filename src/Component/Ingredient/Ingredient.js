import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";

export default function Ingredient({ title = "", data = "" } = {}) {
  let ingredient, caption, list, item, itemIcon, itemText, iconBox;

  ingredient = CreateElement({ name: "div" });
  caption = CreateElement({ name: "h3", title: title, style:"font-SemiBold text-[24px]" });
  list = CreateElement({ name: "div", style: `` });

  data.forEach((i) => {
    item = CreateElement({
      name: "div",
      style: `flex items-center gap-3 py-5 border-b-2 border-[rgba(0,0,0,0.05)]`,
    });

    if (i.icon) {
      iconBox = CreateElement({
        name: "div",
        style: `w-5 h-5 bg-black flex items-center justify-center rounded-full`,
      });
      itemIcon = CreateElement({ name: "img", src: i.icon });
      Append(iconBox, itemIcon);
    } else {
      iconBox = CreateElement({
        name: "div",
        style: `w-5 h-5 rounded-full border-2 border-[rgba(0,0,0,0.2)]`,
      });
    }

    itemText = CreateElement({ name: "span", title: i.title });

    Append(item, ...[iconBox, itemText]);
    Append(list, item);
  });

  Append(ingredient, ...[caption, list]);

  return ingredient;
}
