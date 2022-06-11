export function instructionsPage(params) {
    const div = document.createElement("div");
    div.className = "box"
  
    div.innerHTML = `
   
    
      <h1 class="text">Presioná jugar
      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>
      
      <button-comp class=button">¡Jugar!</button-comp>
    
      <hands-comp class="hands"></handscomp>
     
    
    `;
  
    const style = document.createElement("style");
    style.innerHTML = `

    body {
      box-sizing: border-box;
      margin: 0 auto;
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
        max-width: 500px;
        margin: 0 auto;
        padding-top: 0px;
      }
    }
  
  
    .hands {
      margin-top: 86px;
      padding: 0;
      bottom: 0,
    }
  
  
    @media (min-width: 769px) {
      .hands {
       margin-right: 300px;
      }
    }
    

   .text {
    background-image: none;
      font-size: 40px;
      font-family: courier new;
      width: 316px;
      height 240px;
      text-align: center;
      margin: 100px 0px 50px 0px;
      padding: 0;
    }
  
    @media (min-width: 769px) {
      .text {
        font-size: 50px;
        width: 100%;
        height 100%;
      }
    }

    `
  
    const buttonElem: any = div.querySelector("button-comp");
  
    buttonElem.addEventListener("click", () => {
      params.goTo("/play");
    });  
  
    div.appendChild(style)
    return div;
  }