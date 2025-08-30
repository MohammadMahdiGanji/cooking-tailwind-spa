export default function Append(parent, ...children) {
  try {
    if (!parent && !(parent instanceof HTMLElement)) {
      throw new Error("❌ parent باید یک عنصر معتبر DOM باشد.");
    } else {
      children.forEach((child) => parent.append(child));
    }
  } catch (err) {
    console.log("Error Function Append", err.message);
  }
}
