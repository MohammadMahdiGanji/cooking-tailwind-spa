import Append from "../Append/Append";
import CreateElement from "../CreateElement/CreateElement";

export default function NotFound(title) {
  const app = document.getElementById("app");
  let notFound;
  
  try {
    notFound = CreateElement({
      name: "div",
      style: "text-center w-full bg-primary text-2xl font-Bold p-5",
    });
    const notFoundText = CreateElement({ name: "h2", title: title });

    Append(notFound, notFoundText);
    Append(app, notFound);
  } catch (err) {
      console.log("Error Not Found", err)
  }

  return notFound;
}
