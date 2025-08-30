import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import logosrc from "../../assets/icon/logo.svg";
import facebookSrc from "../../assets/icon/facebook.svg";
import twitterSrc from "../../assets/icon/twitter.svg";
import instagramSrc from "../../assets/icon/instagram.svg";
import Link from "../LInk/Link";

export default function MenuMobile(list) {
  let boxMenuMobile,
    menuMobile,
    logo,
    socials,
    facebookImg,
    twitterImg,
    instagramImg;

    const toggleMenu = () => {
      boxMenuMobile.classList.toggle('active-menu')
    }

  try {
    boxMenuMobile = CreateElement({
      name: "div",
      style: `fixed -left-[250px] w-[250px] bottom-0 top-0 h-full bg-[rgba(0,0,0,0.1)]
      p-4 pt-12  backdrop-blur-md z-20 transition-all duration-250 
      sm:hidden border-r-1 border-[rgba(0,0,0,0.1)]
      `,
    });
    menuMobile = CreateElement({
      name: "ul",
      style: "mt-10 flex flex-col gap-y-5",
    });
    logo = CreateElement({ name: "img", src: logosrc, alt: "logo" });
    socials = CreateElement({ name: "div", style: "flex gap-5 mt-10" });
    facebookImg = CreateElement({ name: "img", src: facebookSrc });
    twitterImg = CreateElement({ name: "img", src: twitterSrc });
    instagramImg = CreateElement({ name: "img", src: instagramSrc });

    list.forEach((item) => {
      const menuMobileItem = CreateElement({ name: "li" });
      const menuMobileLink = Link({
        href: item.link,
        title: item.title,
        style: `cursor-pointer relative transition-all duration-250 after:content-[] after:absolute after:left-0 after:top-0 
        after:bottom-0 after:m-auto after:w-[0] after:h-1 after:bg-black hover:after:w-[25px] 
        hover:pl-[27px] after:transition-all after:duration-250 after:rounded-2xl`,
      });

      Append(menuMobileItem, menuMobileLink);
      Append(socials, ...[facebookImg, twitterImg, instagramImg]);
      Append(menuMobile, menuMobileItem);
    });

    Append(boxMenuMobile, ...[logo, menuMobile, socials]);
  } catch (err) {
    throw new Error(`error menu mobule ${err.message}`);
  }

  return {boxMenuMobile,toggleMenu};
}
