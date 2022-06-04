export function instructionsPage(params) {
    const div = document.createElement("div");
    div.className = "container"
  
    div.innerHTML = `
   
    
      <h1 class="title">Presioná jugar
      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>
      
      <button-comp>¡Jugar!</button-comp>
    
      <hands-comp></handscomp>
     
    
    `;
  
    const style = document.createElement("style");
    style.innerHTML = `
  
  
   .title {
      font-size: 40px;
      font-family: courier new;
      width: 316px;
      height 240px;
      text-align: center;
   
    }
  
    `
  
     const buttonElem = div.querySelector("button-comp");
  
    buttonElem.addEventListener("click", () => {
      params.goTo("/instructions");
    }); 
  
    div.appendChild(style)
    return div;
  }