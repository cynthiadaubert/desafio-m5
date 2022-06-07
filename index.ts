import { initRouter } from "./router";
import {buttonComp} from "./components/button"
import {handsComp} from "./components/hands"
import { state } from "./state";

(function () {
  buttonComp()
  handsComp()
  state.initState()
  initRouter(document.querySelector(".root"));
})();
