import { welcomePage } from "./pages/welcome";
import { instructionsPage } from "./pages/instructions";
import { playPage } from "./pages/play";
import {handsPage} from "./pages/show-hands"
import { resultsPage } from "./pages/results";

const BASE_PATH = "/desafio-m5";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  {
    path: /\/welcome/,
    component: welcomePage,
  },
  {
    path: /\/instructions/,
    component: instructionsPage,
  },
  {
    path: /\/play/,
    component: playPage,
  },

   {
    path: /\/results/,
    component: resultsPage,
  },  
   {
    path: /\/showhands/,
    component: handsPage,
  },  

];

export function initRouter(container: Element) {
  function goTo(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
 /*    console.log("El handleRoute recibió una nueva ruta", route);
    console.log("soy el location pathname", location.pathname); */

    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
/*     console.log("soy el new route", newRoute); */
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const elem = r.component({ goTo: goTo });
        /* console.log("soy el elem",elem) */
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(elem as any);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  ///ESCUCHA LOS CAMBIOS PARA PODER NAVEGAR POR EL HISTORIAL///

  window.onpopstate = function(){
    handleRoute(location.pathname)
  }
}
