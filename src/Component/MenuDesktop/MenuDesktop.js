import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import { renderView } from "../renderView/renderView";
import Link from "../LInk/Link";

export default function MenuDesktop({list = "", style=""} = {}) {
  let menuDesktop;
  try {
    menuDesktop = CreateElement({
      name: "ul",
      style: `${style}`,
    });
    const path = location.pathname;

    list.forEach((item) => {
      const itemMenuDesktop = CreateElement({ name: "li" });
      const itemLinkDesktop = Link({
        href: item.link,
        title: item.title,
        style:
          path == item.link
            ? `font-medium relative after:content[""] after:absolute after:w-full after:-bottom-1 
        after:left-0 after:right-0 after:bg-black after:h-1 after:rounded-xl text-sm cursor-pointer
        after:transition-all after:duration-250`
            : `font-medium font-medium relative after:content[""] after:mx-auto after:absolute 
        after:w-0 after:-bottom-1 after:transition-all after:duration-250 after:left-0 cursor-pointer
        after:right-0 after:bg-black after:h-1 after:rounded-xl hover:after:w-full text-sm`,
      });

      Append(itemMenuDesktop, itemLinkDesktop);
      Append(menuDesktop, itemMenuDesktop);
    });
  } catch (err) {
    console.error("خظایی در منو وجود دارد", err.message);
  }

  return menuDesktop;
}
