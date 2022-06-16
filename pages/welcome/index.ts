import { initRouter } from "../../router";

export function welcomePage(params) {
  
  const div = document.createElement("div");
  div.className ="box"

  div.innerHTML = `
 
    <h1 class="title">Piedra papel o tijera</h1>
    
    <button-comp>Empezar</button-comp>
    
    <hands-comp class="hands"></handscomp>
   
  `;

  //////// ESTILOS //////////

  const style = document.createElement("style");
  style.innerHTML = `

  body {
    box-sizing: border-box;
    margin: 0 auto;
  
  }

  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

  @media (min-width: 769px) {
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 0px;
    }
  }

 .title {
    font-size: 80px;
    font-family: courier new;
    text-align: center;
    width: 284px;
    height 204px;
    font-style: bold;
    color: #009048;
    margin: 100px 0px 50px ;
    padding; 0;
    
  }

  @media (min-width: 769px) {
    .title {
      font-size: 100px;
      width: 80%;
      height 80%;
     
    }
  }
  
  .hands {
    margin-top: 86px;
    padding: 0;
    bottom: 0,
  }


  @media (min-width: 769px) {
    .hands {
      display: flex;
      justify-content: center;
      width: 100%;
      position: fixed;
      margin-left: 176px;
    }
  }
  
  `

  //////// IR A LA SIGUIENTE PÁGINA /////////
  
  const buttonElem: any = div.querySelector("button-comp");

  buttonElem.addEventListener("click", () => {
    params.goTo("/instructions");
  }); 

  
  div.appendChild(style)
  return div;
}

