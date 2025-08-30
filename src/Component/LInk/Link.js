import CreateElement from "../CreateElement/CreateElement";
import { renderView } from "../renderView/renderView";

export default function Link({ href = "", title = "", style = "" }) {
  const clickHendler = (event) => {
    event.preventDefault();
    history.pushState(null, "", href);
    renderView(href);
  };

  const link = CreateElement({
    name: "a",
    style: style,
    src: href,
    event: "click",
    eventCallback: clickHendler,
  });
  title && (link.textContent = title);
  style && (link.class = style);

  return link;
}
