import Home from "./pages/Home/Home.js";
import Recipe from "./pages/Recipe/Recipe.js";
import Blog from "./pages/Blog/BLog.js";
import Contact from "./pages/Contact/Contact.js";
import NotFound from "./Component/NotFound/NotFound.js";

const app = document.getElementById("app");

const route = {
  "/": Home,
  "/recipe": Recipe,
  "/blog": Blog,
  "/contact": Contact,
};

export const router = (app) => {
  try {
    const pathName = location.pathname;
    app.innerHTML = "";

    const render = route[pathName] && route[pathName]();

    if (render) {
      app.append(render);
    } else {
      NotFound("Not Found Page");
    }
  } catch (err) {
    console.error("error router", err.message);
    NotFound("Error Router");
  }
};

export const navigate = (path) => {
  window.history.pushState({}, "", path);
  router(app);
};

window.addEventListener("hashchange", () => router(app));
window.addEventListener("load", () => router(app));
