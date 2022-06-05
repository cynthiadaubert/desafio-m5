export function playPage(params) {
  console.log("soy params",params)

  const div = document.createElement("div");

  div.innerHTML = `
 
    <div class=circle></div>

    <hands-comp></hands-comp>
  
  `;

/* CONTADOR */  
  
let counter = 3;

const countdownElem = div.querySelector(".circle") as any;

const intervalId = setInterval(() => {
  countdownElem.innerHTML= `${counter}`;
  counter--;
  console.log("hola" + counter);
  if (counter < 0) {
    clearInterval(intervalId)
      params.goTo("./instructions") ;
  }

}, 1000); 

/* ESTILOS */

  const style = document.createElement("style");
  style.innerHTML = `

  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 118px 0px 80px 0px;
  }

  .circle {
    border-radius: 50%;
    width: 243px;
    height: 243px;
    padding: 20px 0px 0px 0px;
    margin: 0;
    background-color: none;
    border: 24px solid #000;
    color: #000;
    text-align: center;
    font-family: arial black;
    font-size: 100px;
    animation: loading 3s forwards;
    animation-delay: 1s;
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


  }

  `

/*   JUEGO */

  div.appendChild(style)
  return div;
}






