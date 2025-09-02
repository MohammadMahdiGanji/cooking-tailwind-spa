import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append.js";
import { dataMenu } from "../../data.js";
import MenuDesktop from "../MenuDesktop/MenuDesktop";
import logoSrc from "../../assets/icon/logo.svg";
import facebookSrc from "../../assets/icon/facebook.svg";
import twitterSrc from "../../assets/icon/twitter.svg";
import instagramdarkSrc from "../../assets/icon/instagramdark.svg";
import MenuMobile from "../MenuMobile/MenuMobile.js";

export default function Header() {
  let header,
    container,
    navigation,
    logo,
    socials,
    facebook,
    twitter,
    instagram,
    linkFacebook,
    linkTwitter,
    linkInstagram,
    menuDesktop,
    barBox,
    bar;

    const {boxMenuMobile, toggleMenu} = MenuMobile(dataMenu);
    

  const openMenu = () => {
    bar.classList.toggle("active-bar");
    toggleMenu()
  };

  try {
    header = CreateElement({ name: "header", style: "py-8 border-b-1 border-[rgba(0,0,0,0.1)] shadow-[0px_2px_10px_rgba(0,0,0,0.07)]" });
    container = CreateElement({ name: "div", style: "container" });
    navigation = CreateElement({
      name: "nav",
      style: "flex justify-between items-center",
    });
    logo = CreateElement({ name: "img", src: logoSrc });
    linkFacebook = CreateElement({ name: "a", href: "#" });
    linkTwitter = CreateElement({ name: "a", href: "#" });
    linkInstagram = CreateElement({ name: "a", href: "#" });
    socials = CreateElement({ name: "div", style: "hidden gap-5 sm:flex" });
    facebook = CreateElement({
      name: "img",
      src: facebookSrc,
    });
    twitter = CreateElement({
      name: "img",
      src: twitterSrc,
    });
    instagram = CreateElement({
      name: "img",
      src: instagramdarkSrc,
    });
    menuDesktop = MenuDesktop(dataMenu);
    barBox = CreateElement({
      name: "div",
      style: `w-[35px] h-[50px] flex justify-center items-center
     rounded-lg cursor-pointer sm:hidden
     `,
      event: "click",
      eventCallback: openMenu,
    });
    bar = CreateElement({
      name: "span",
      style: `sm:hidden w-full h-1 bg-black rounded-xl  relative after:content-[""] after:absolute transition-all
    after:w-full after:h-1 after:bg-black after:translate-y-2.5 after:rounded-xl after:transition-all after:duration-250
    before:absolute before:w-full before:h-1 before:bg-black before:-translate-y-2.5 before:rounded-xl before:duration-250
    before:transition-all before:duration-250`,
    });

  } catch (err) {
    console.error("خطا در ساخت  عناصر", err.message);
    return CreateElement({
      name: "header",
      title: "خطا در بارگذاری هدر",
      style: "p-4 font-2xl text-center",
    });
  }

  try {
    Append(header, container);
    Append(container, navigation);
    Append(barBox, ...[bar]);
    Append(navigation, ...[logo, menuDesktop, boxMenuMobile, socials, barBox]);
    Append(linkFacebook, facebook);
    Append(linkTwitter, twitter);
    Append(linkInstagram, instagram);
    Append(socials, ...[linkFacebook, linkTwitter, linkInstagram]);
  } catch (err) {
    console.error("خطا در اضافه کردن عناصر", err);
    return CreateElement({
      name: "header",
      title: "خطا در نمایش هدر",
      style: "p-4 font-2xl text-center",
    });
  }

  return header;
}
