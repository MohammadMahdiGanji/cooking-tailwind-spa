import CreateElement from "../CreateElement/CreateElement";
import Append from "../Append/Append";
import bannerSrc from "../../assets/images/bannerContact.png";
import NotFound from "../NotFound/NotFound";

function input({ type = "", title = "", placeHolder = "" }) {
  let inputBox, label, input;

  inputBox = CreateElement({
    name: "div",
    style: "col-span-12 lg:col-span-6 row-span-1",
  });
  label = CreateElement({
    name: "label",
    title: title,
    style: `text-secondary font-Medium text-xs lg:text-base mb-2 block`,
  });
  input = CreateElement({
    name: "input",
    type: type,
    placeholder: placeHolder,
    style: `border-1 block border-[rgba(0,0,0,0.2)] px-2 py-3 text-xs rounded-xl w-full lg:text-base xl:px-3 xl:py-4`,
  });

  Append(inputBox, ...[label, input]);

  return inputBox;
}

export default function ContactContent() {

  // create variables
  let contactContent,
    container,
    wrapper,
    title,
    bannerBox,
    bannerImg,
    form,
    inputName,
    inputEmail,
    inputSubject,
    inputType,
    messageBox,
    message,
    messageLabel;

  try {
    
    // create elements
    contactContent = CreateElement({ name: "div", style: "mt-10" });
    container = CreateElement({ name: "div", style: "container" });
    wrapper = CreateElement({
      name: "div",
      style: "grid grid-cols-12 sm:gap-5 mt-16",
    });
    title = CreateElement({
      name: "h1",
      title: "Contact",
      style: "text-center font-Bold text-lg",
    });
    bannerBox = CreateElement({
      name: "div",
      style: `bg-gradient-to-t from-primary to-white px-3 
    rounded-3xl overflow-hidden mt-6 flex justify-center col-span-12 sm:col-span-6  lg:col-span-4 sm:mt-0`,
    });
    bannerImg = CreateElement({
      name: "img",
      src: bannerSrc,
      syle: "max-auto",
    });
    form = CreateElement({
      name: "form",
      style:
        "grid grid-cols-12 grid-rows-5  sm:gap-0 lg:gap-5  mt-10 col-span-12  sm:col-span-6 lg:col-span-8 sm:mt-0",
    });

    inputName = input({
      type: "text",
      title: "NAME",
      placeHolder: "Enter Your Name...",
    });

    inputEmail = input({
      type: "email",
      title: "EMAIL ADDRESS",
      placeHolder: " Your Email Address...",
    });

    inputSubject = input({
      type: "text",
      title: "Subject",
      placeHolder: " Enter Subject...",
    });

    inputType = input({
      type: "text",
      title: "Type",
      placeHolder: " Enter Type...",
    });

    messageBox = CreateElement({
      name: "div",
      style: "col-span-12 row-span-3 h-full",
    });
    messageLabel = CreateElement({
      name: "label",
      title: "message",
      style: `text-secondary font-Medium text-xs lg:text-base mb-2 block`,
    });
    message = CreateElement({
      name: "textarea",
      style: `border-1 block border-[rgba(0,0,0,0.2)] px-2 
    py-3 text-xs rounded-xl w-full lg:text-base h-[88%] resize-none`,
      placeholder: "Enter Your Message",
    });

    // add elements
    Append(contactContent, container);
    Append(container, ...[title, wrapper]);
    Append(wrapper, ...[bannerBox, form]);
    Append(bannerBox, ...[bannerImg]);
    Append(
      form,
      ...[inputName, inputEmail, inputSubject, inputType, messageBox]
    );
    Append(messageBox, ...[messageLabel, message]);
  } catch (err) {
    NotFound(`Error Content section to contact page ${err.message}`);
    throw new Error(`Error Content section to contact page ${err.message}`);
  }

  return contactContent;
}
