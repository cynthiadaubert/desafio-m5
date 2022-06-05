

export function welcomePage(params) {
  const div = document.createElement("div");
  div.className = "container"

  div.innerHTML = `
 
  
    <h1 class="title">Piedra papel o tijera</h1>
    
    <button-comp>Empezar</button-comp>
    
    <hands-comp></handscomp>
   
  
  `;

  const style = document.createElement("style");
  style.innerHTML = `


  @media (min-width: 769px) {
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding-top: 80px;
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

  `

   const buttonElem = div.querySelector("button-comp");

  buttonElem.addEventListener("click", () => {
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
