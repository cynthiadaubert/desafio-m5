import { buttonComp } from "../../components/button";
import { handsComp } from "../../components/hands";

export function welcomePage(params) {
  const div = document.createElement("div");

  div.innerHTML = `
 
  <h1 class="title">Piedra, papel o tijera</h1>
    
  <button-comp class="button-elem">Empezar</button-comp>
  
  <hands-comp></hands-comp>

  `;

  const buttonElem = div.querySelector("button-comp");

  buttonElem.addEventListener("click", () => {
    params.goTo("/desafio-m5/instructions");
  });

  return div;
}

/* .
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
 */
/*  connectedCallback(){
    (lo usamos para ejecutar el render) 
    this.render()
} */

/*  (tres customs elements diferentes vs un custom element que solamente cambia el atributo ) 
    this.innerHTML = `
    <jugada-piedra>
    <my-jugada jugada="piedra">
    
    ` */

/* usar position fixed o absolute para la ubicacion de las manos */
