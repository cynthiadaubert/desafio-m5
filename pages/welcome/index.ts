import { initRouter } from "../../router";


export function welcomePage(params) {
  
  const div = document.createElement("div");
  div.className ="box"

  div.innerHTML = `
 
  
    <h1 class="title">Piedra papel o tijera</h1>
    
    <button-comp>Empezar</button-comp>
    
    <hands-comp class="hands"></handscomp>
   
  
  `;

  const style = document.createElement("style");
  style.innerHTML = `

  @media (min-width: 769px) {
    .box {
      max-width: 500px;
      margin: 0 auto;
      padding-top: 80px;
      border: solid 10px black;
    }
  }

 .title {
    font-size: 80px;
    font-family: courier new;
    width: 284px;
    height 204px;
    font-style: bold;
    color: #009048;
    margin: 0;
    padding; 0;
    
  }

  @media (min-width: 769px) {
    .hands {
      
    }
  }
  

  `

  const buttonElem: any = div.querySelector("button-comp");

  buttonElem.addEventListener("click", () => {
    console.log(params.goTo)
    params.goTo("/instructions");
  }); 

  
  div.appendChild(style)
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
