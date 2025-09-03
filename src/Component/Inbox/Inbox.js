import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Button from "../Button/Button";
import saladSrc from "../../assets/images/salad.png";
import plateSrc from "../../assets/images/plate.png";
import NotFound from "../NotFound/NotFound";

export default function Inbox() {
  // create variables
  let inbox,
    container,
    wrapper,
    title,
    caption,
    emailBox,
    email,
    btn,
    imgSalad,
    imgPlate;
  try {
    // create elements
    inbox = CreateElement({ name: "section", style: "mt-28 text-center" });
    container = CreateElement({ name: "div", style: "container" });
    wrapper = CreateElement({
      name: "div",
      style:
        "bg-primary py-10 lg:py-15 px-5 rounded-[40px] relative z-20 overflow-hidden",
    });
    title = CreateElement({
      name: "h2",
      title: "Deliciousness to your inbox",
      style:
        "font-SemiBold xs:text-[20px] sm:text[30px] md:text-[40px] lg:text-[48px] relative z-20",
    });
    caption = CreateElement({
      name: "p",
      title:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim ",
      style:
        "text-xs line-clamp-2 text-secondary mt-5 md:text-sm max-w-[620px] mx-auto lg:text-base relative z-20",
    });
    emailBox = CreateElement({
      name: "div",
      style: `mt-15 bg-white p-1 pl-2 sm:p-2 sm:pl-5 flex rounded-lg sm:rounded-xl md:rounded-2xl w-full
         max-w-[400px] mx-auto lg:p-3 lg:pl-7 lg:max-w-[500px] relative z-20 overflow-hidden`,
    });
    email = CreateElement({
      name: "input",
      type: "email",
      placeholder: "Your email address...",
      style: "w-full text-xs sm:text-sm",
    });
    btn = Button({ title: "Subscribe" });
    imgSalad = CreateElement({
      name: "img",
      src: saladSrc,
      style:
        "absolute -top-10 -left-10 z-10 sm:top-auto w-[250px] sm:-bottom-40 sm:-left-40 sm:w-[400px] lg:w-[500px]",
    });
    imgPlate = CreateElement({
      name: "img",
      src: plateSrc,
      style:
        "absolute -bottom-20 -right-20 z-10  w-[250px] sm:-bottom-40 sm:-right-40 sm:w-[400px] lg:w-[500px]",
    });

    // add elements
    Append(inbox, container);
    Append(container, wrapper);
    Append(wrapper, ...[title, caption, emailBox, imgSalad, imgPlate]);
    Append(emailBox, ...[email, btn]);
  } catch (err) {
    NotFound(`Error Inbox Section ${err.message}`);
    throw new Error(`Error Inbox Section ${err.message}`);
  }

  return inbox;
}
