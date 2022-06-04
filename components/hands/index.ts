const imagePiedraURL = require("url:../../img/piedra.png");
const imagePapelURL = require("url:../../img/papel.png");
const imageTijeraURL = require("url:../../img/tijera.png");

const handsContainer = document.querySelector(".root");

handsContainer.innerHTML = `

  <img src=${imagePiedraURL}>
  <img src=${imagePapelURL}>
  <img src=${imageTijeraURL}>

`;

export function handsComp() {
  customElements.define(
    "hands-comp",

    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }

      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        handsContainer.className = "hand";

        style.innerHTML = `

          .hand {
            width:80px;
            height:180px;
          }       
    `;

        shadow.appendChild(style);
      }
    }
  );
}
