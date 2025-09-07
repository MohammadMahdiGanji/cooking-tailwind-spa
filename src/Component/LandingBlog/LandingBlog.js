import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import Button from "../Button/Button";
import NotFound from "../NotFound/NotFound";

export default function LandingBlog() {
  // create variables
  let landingBlog, container, wrapper, title, caption, inputBox, input, btn;

  try {
    // create elements
    landingBlog = CreateElement({ name: "div", style: "mt-12" });
    container = CreateElement({ name: "div", style: "container" });
    wrapper = CreateElement({ name: "div" });
    title = CreateElement({
      name: "h1",
      title: "Blog & Article",
      style:
        "text-center font-Bold xs:text-[25px] sm:text-[30px] md:text-[38px] lg:text-[45px] xl:text-[50px]",
    });
    caption = CreateElement({
      name: "p",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      style:
        "text-xs text-center text-secondary mt-2 xs:max-w-[360px] mx-auto sm:max-w-full sm:text-sm md:text-base",
    });
    inputBox = CreateElement({
      name: "div",
      style: `border-1 border-[rgba(0,0,0,0.2)] rounded-xl
    flex items-center p-1 pl-4 mt-6 xs:rounded-2xl xs:p-1.5 xs:pl-4 xs:max-w-[350px] mx-auto sm:max-w-[400px] 
    md:max-w-[450px] lg:max-w-[600px] lg:pl-4 lg:p-2 md:mt-10 lg:mt-12 xl:mt-14`,
    });
    input = CreateElement({
      name: "input",
      style: `w-full outline-none text-[8px] xs:text-sm h-full block xs:py-3`,
      placeholder: "Search article, news or recipe...",
    });
    btn = Button({
      title: "Search",
      style: "md:py-3.5 md:px-7.5 lg:py-4 lg:px-10",
    });

    // add elements
    Append(landingBlog, container);
    Append(container, wrapper);
    Append(wrapper, ...[title, caption, inputBox]);
    Append(inputBox, ...[input, btn]);
  } catch (err) {
    NotFound(`Error landing section blog page ${err.message}`);
    throw new Error(3);
  }

  return landingBlog;
}
