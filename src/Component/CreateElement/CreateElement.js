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
  } catch (err) {
    throw new Error(`error Create element ${err.message}`);
  }

  return element;
}
