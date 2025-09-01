import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import NotFound from "../NotFound/NotFound";

export default function Category({ icon = "", color = "", title = "" } = {}) {
  let category, img, imgShasow, text;
  try {
    category = CreateElement({
      name: "div",
      style: ` p-8 pb-4 pt-0 col-span-12 rounded-2xl ${color} 
      relative w-full max-w-[250px] xs:col-span-6 sm:col-span-4 
      lg:col-span-2`,
    });
    img = CreateElement({
      name: "img",
      src: icon,
      style: "w-[70px] mx-auto md:w-[90px] xl:md:w-[100px]",
    });
    imgShasow = CreateElement({
      name: "img",
      src: icon,
      style:
        "w-[70px] mx-auto absolute right-0 -z-1 left-6 top-4 blur-xl md:w-[90px] xl:md:w-[100px]",
    });
    text = CreateElement({
      name: "p",
      title: title,
      style: "mt-6 text-center font-SemiBold",
    });
    Append(category, ...[img, text, imgShasow]);
  } catch (err) {
    NotFound(`Error Component Category ${err}`);
    throw new Error(`Error Component Category ${err}`);
  }

  return category;
}
