import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";

export default function Button({ title = "", icon = "" } = {}) {
  const button = CreateElement({
    name: "button",
    title: title,
    style: "",
    style:
      "bg-black flex text-white py-2 cursor-pointer px-4 text-xs font-SemiBold rounded-xl gap-2 cursor-pinter items-center",
  });
  const img = CreateElement({ name: "img", src: icon, style:"w-6" });

  icon && Append(button, img);

  return button;
}
