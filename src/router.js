import Home from "./pages/Home/Home.js";
import Recipe from "./pages/Recipe/Recipe.js";
import Blog from "./pages/Blog/BLog.js";
import Contact from "./pages/Contact/Contact.js";

const app = document.getElementById("app");

const route = {
  "/": Home,
  "/recipe": Recipe,
  "/blog": Blog,
  "/contact": Contact,
};

export const router = (app) => {
  const pathName = location.pathname;
  app.innerHTML = "";

  const render = route[pathName] && route[pathName]();

  if (render) {
    app.append(render);
  } else {
    const notFound = document.createElement("div");
    const notFoundText = document.createElement("p");

    notFoundText.textContent = "Not Found Page";

    notFound.className = "text-center w-full bg-primary text-2xl font-Bold p-5"

    notFound.append(notFoundText);
    app.append(notFound);
  }
};

window.addEventListener("hashchange", () => router(app));
window.addEventListener("load", () => router(app));
