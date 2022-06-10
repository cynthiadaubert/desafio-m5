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
       
       }
        connectedCallback(){
          this.addCallbacks()
          this.render()
        }

        addCallbacks() {
          this.shadow.querySelector(".hand").addEventListener("click", (e) => {
            const event = new CustomEvent("handEvent", {
              detail: {
                type: this.getAttribute("type"),
              },
            });
            this.dispatchEvent(event);
          });
        }

        render() {
          const div = document.createElement("div")
          div.className = "hands-cont";
  
         div.innerHTML = `
  
          <img type="piedra" class="piedra" src=${imagePiedraURL}>
          <img type="papel" class="papel" src=${imagePapelURL}>
          <img type="tijera" class="tijera" src=${imageTijeraURL}>
  
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



      this.shadow.appendChild(style)
      this.shadow.appendChild(div)
      
  }
})
}
   

