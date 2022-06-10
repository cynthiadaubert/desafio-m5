
export function playPage(params) {

  const div = document.createElement("div");
  div.className = "container-play"

  div.innerHTML = `
 
    <div class=circle></div>

    <hands-container class="hands">
      <hands-comp variant="selected"></hands-comp>
    </hands-container>
  
  `;

//////* ESTILOS *//////

  const style = document.createElement("style");
  style.innerHTML = `

  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid #000;
    padding: 118px 0px 80px 0px;
    width: 100%;
  }

  .circle {
    border-radius: 50%;
    width: 243px;
    height: 243px;
    padding: 20px 0px 0px 0px;
    margin-bottom: 80px;
    background-color: none;
    border: 24px solid #000;
    color: #000;
    text-align: center;
    font-family: arial black;
    font-size: 100px;
    animation: loading 3s forwards;
    animation-delay: 1s;
  }

  .hands {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: fixed;
    border: solid black 10px;
   
  }
  

  @keyframes loading {

    0% {
      
      border-top: 24px solid grey;
      border-right: 24px solid black;
      border-bottom: 24px solid black;
      border-left: 24px solid black;
    }

    25% {
  
      border-right: 24px solid grey;
      border-bottom: 24px solid black;
      border-left: 24px solid black;
    }

    75% {
      
      border-right: 24px solid white;
      border-bottom: 24px solid white;
      border-left: 24px solid black;
    }

    100% {
      border-top: 24px solid white;
      border-right: 24px solid white;
      border-bottom: 24px solid white;
      border-left: 24px solid white;
    }

    .transparent {
      opacity: 50%;
    }

  }

  `

//////* CUENTA ATRÁS DEL CÍRCULO */////
  
let counter = 3;

const countdownElem = div.querySelector(".circle") as any;


const intervalId = setInterval(() => {
  countdownElem.innerHTML= `${counter}`;
  counter--;
  if (counter < 0 && location.pathname.includes("play")) {
    clearInterval(intervalId)
   /*  params.goTo("./instructions") */;
  }

}, 1000); 


////// TIMEOUT PARA PASAR A PAGE RESULTS //////

const handsContainer: any = div.querySelector(".hands")

handsContainer.addEventListener("click", () => {
  setTimeout(() => {  params.goTo("/results") }, 1500);
});


  div.appendChild(style)
  return div;
  
}






