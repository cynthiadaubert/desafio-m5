import {state} from "../../state"

const imagePiedraURL = require("url:../../img/piedra.png");
const imagePapelURL = require("url:../../img/papel.png");
const imageTijeraURL = require("url:../../img/tijera.png");

export function playPage(params) {

  const div = document.createElement("div");

  div.innerHTML = `
 
    <div class=circle></div>

    <hands-container class="hands">
        <img class="piedra" src=${imagePiedraURL}>
       <img class="papel" src=${imagePapelURL}>
        <img class="tijera" src=${imageTijeraURL}>
    </hands-container>
  
  `;

//////* ESTILOS *//////

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
    width: 375px;
    position: fixed;
  }

  .piedra {
    padding-right: 30px;
  }

  .papel {
    padding-right: 30px;
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

//////* CONTADOR */////
  
let counter = 3;

const countdownElem = div.querySelector(".circle") as any;

const intervalId = setInterval(() => {
  countdownElem.innerHTML= `${counter}`;
  counter--;
  if (counter < 0) {
    clearInterval(intervalId)
      /* params.goTo("./instructions") */ ;
  }

}, 1000); 




////// TIMEOUT PARA PASAR A RESULTS //////

const handsContainer = div.querySelector(".hands")
const imgPapel = div.querySelector(".papel")
const imgPiedra = div.querySelector(".piedra")

handsContainer.addEventListener("click", (event) => {
  if(event.target == imgPapel){
    style.innerHTML =`
    .tijera, .piedra {
      opacity: 0.5;
    }
  `;
  }else if(event.target == imgPiedra){
    style.innerHTML =`
    .tijera, .papel {
      opacity: 0.5;
    }
    `;
  }else {
    style.innerHTML =`
    .piedra, .papel {
      opacity: 0.5;
    }
    `;
  }

  setTimeout(() => {  params.goTo("/results") }, 1500);
});


  div.appendChild(style)
  return div;
  
}






