import { initRouter } from "./router";
import {buttonComp} from "./components/button"
import {handsComp} from "./components/hands"

(function () {
  buttonComp()
  handsComp()
  initRouter(document.querySelector(".root"));
})();
