import CreateElement from "../CreateElement/CreateElement";
import { renderView } from "../renderView/renderView";

export default function Link({ href = "", title = "", style = "" }) {
  let link;
  try {
    const clickHandler = (event) => {
      event.preventDefault();
      history.pushState(null, "", href);
      renderView(href);
    };

    link = CreateElement({
      name: "a",
      style: style,
      href: href,
      title: title,
      event: "click",
      eventCallback: clickHandler,
    });
  } catch (err) {
    throw new Error(`error Link ${err.message}`);
  }

  return link;
}
