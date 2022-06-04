const imagePiedraURL = require("url:../../img/piedra.png");
const imagePapelURL = require("url:../../img/papel.png");
const imageTijeraURL = require("url:../../img/tijera.png");


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
        const handsContainer = document.createElement("div")
        const style = document.createElement("style");
        handsContainer.className = "hand";

        handsContainer.innerHTML = `

        <img class="piedra" src=${imagePiedraURL}>
        <img class="papel" src=${imagePapelURL}>
        <img src=${imageTijeraURL}>

      `;


        style.innerHTML = `

        .piedra {
          padding-right: 40px;
        }

        .papel {
          padding-right:40px;
        }

          .hand {
            display: flex;
            justify-content: center;
          position: fixed;
        
          }       
    `;

      shadow.appendChild(handsContainer)
      shadow.appendChild(style);
      
      }
    }
  );
}
