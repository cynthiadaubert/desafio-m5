import { state } from "../../state";

const imagePiedraURL = require("url:../../img/piedra.png");
const imagePapelURL = require("url:../../img/papel.png");
const imageTijeraURL = require("url:../../img/tijera.png");


export function handsComp() {
  customElements.define(
    "hands-comp",

    class extends HTMLElement {
      shadow: ShadowRoot;
      type: string;

      constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.type = this.getAttribute("type")
       }
        connectedCallback(){
          this.render()
        }

        render() {
          const div = document.createElement("div")
          div.className = "hands-cont";
  
         div.innerHTML = `
  
          <img class="piedra" src=${imagePiedraURL}>
          <img class="papel" src=${imagePapelURL}>
          <img class="tijera" src=${imageTijeraURL}>
  
          `;

        const style = document.createElement("style");

        style.innerHTML = `

        .piedra {
          padding-right: 40px;
        }

        .papel {
          padding-right:40px;
        }

            
        `;

      const piedra = div.querySelector(".piedra");
      piedra.addEventListener("click", (e) => {
        console.log("soy el targettttt",e.target)
        style.innerHTML = `
          .tijera, .papel {
            opacity: 0.5;
          }
        `;
        state.setMove("piedra");
      });

      const papel = div.querySelector(".papel");
      papel.addEventListener("click", () => {
        style.innerHTML = `
          .tijera, .piedra {
            opacity: 0.5;
          }
        `;
        state.setMove("papel");
      });

      const tijera = div.querySelector(".tijera");
      tijera.addEventListener("click", () => {
        style.innerHTML = `
          .piedra, .papel {
            opacity: 0.5;
          }
        `;
        state.setMove("tijera");
      });

      this.shadow.appendChild(style)
      this.shadow.appendChild(div)
      
    }
  });
}
   

