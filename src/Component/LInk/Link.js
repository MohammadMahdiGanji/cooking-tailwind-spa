import CreateElement from "../CreateElement/CreateElement";
import { renderView } from "../renderView/renderView";

export default function Link({
  href = "",
  title = "",
  style = "",
  element = "",
}) {
  let link;
  try {
    const clickHandler = (event) => {
      event.preventDefault();
      history.pushState(null, "", href);
      renderView(href);
    };

    if (element) {
      element.addEventListener('click',clickHandler)
      link = element
    } else {
      link = CreateElement({
        name: "a",
        style: style,
        href: href,
        title: title,
        event: "click",
        eventCallback: clickHandler,
      });
    }
  } catch (err) {
    throw new Error(`error Link ${err.message}`);
  }

  return link;
}
