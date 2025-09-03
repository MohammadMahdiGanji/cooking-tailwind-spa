export default function CreateElement(object) {
  const {
    name = "",
    style = "",
    title = "",
    src = "",
    href = "",
    event = "",
    eventCallback = () => {},
    alt = "",
    type = "",
    placeholder = "",
  } = object;

  const element = document.createElement(name);

  try {
    title && (element.textContent = title);
    style && (element.className = style);
    src && element.setAttribute("src", src);
    href && element.setAttribute("href", href);
    event &&
      typeof eventCallback === "function" &&
      element.addEventListener(event, eventCallback);
    alt && name === "img" && element.setAttribute("alt", alt);
    type
      ? element.setAttribute("type", type)
      : element.setAttribute("type", "text");
    placeholder && element.setAttribute("placeholder", placeholder);
  } catch (err) {
    throw new Error(`error Create element ${err.message}`);
  }

  return element;
}
