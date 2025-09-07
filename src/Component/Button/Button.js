import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";

export default function Button({ title = "", icon = "", style = "" } = {}) {
  let button, img;
  if (icon) {
    button = CreateElement({
      name: "a",
      title: title,
      style: `bg-black inline-flex text-white py-2 cursor-pointer px-4 text-xs 
        font-SemiBold rounded-xl gap-2 cursor-pinter items-center
        xs:text-sm xs:px-8 xs:py-4 lg:gap-5 ${style}`,
    });
    img = CreateElement({ name: "img", src: icon, style: "w-6" });
  } else {
    button = CreateElement({
      name: "a",
      title: title,
      style: `bg-black inline-flex text-white py-2 cursor-pointer px-4 text-xs 
        font-SemiBold rounded-xl gap-2 cursor-pinter items-center
        xs:text-sm xs:px-6 xs:py-3 lg:gap-5 ${style}`,
    });  
  }

  icon && Append(button, img);

  return button;
}
