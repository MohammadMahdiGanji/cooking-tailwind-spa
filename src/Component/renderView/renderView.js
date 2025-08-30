import Append from "../Append/Append";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import Recipe from "../../pages/Recipe/Recipe";
import Blog from "../../pages/Blog/BLog";
import NotFound from "../NotFound/NotFound";


export  function renderView(path) {
  const app = document.getElementById("app");

  app.innerHTML = "";

  switch (path) {
    case "/":
      Append(app, Home());
      break;
    case "/recipe":
      Append(app, Recipe());
      break;
    case "/blog":
      Append(app, Blog());
      break;
    case "/contact":
      Append(app, Contact());
      break;
    default:
      NotFound("Not Found Page");
  }
}

window.addEventListener("popstate", () => {
  renderView(location.pathname);
});

