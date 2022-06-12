import { stat } from "fs";
import { state } from "../../state"

const piedra = require("url:../../img/piedra.png");
const papel = require("url:../../img/papel.png");
const tijera = require("url:../../img/tijera.png");

const imageWinURL = require("url:../../img/ganaste.png");
const imageLoseURL = require("url:../../img/perdiste.png");
const imageTieURL = require("url:../../img/empate.png");


const currentState = state.getState()

export function resultsPage(params) {

  const div = document.createElement("div")
  const results = document.createElement("div")
  const box = document.createElement("div")
  const style = document.createElement("style")

  box.innerHTML = `

    <div class="container">
      <div class="star"></div>
      <div class="score">
        <h1 class="title">Score</h1>
        <div class="myPlay"> Vos:${currentState.currentGame.myPlay}</div>
        <div class="computerPlay"> Máquina:${currentState.currentGame.myPlay}</div>
      </div>

      <button-comp class="home">Volver a jugar</button-comp>
    </div>    
  `;

  style.innerHTML = `

  .root {
    box-sizing: border-box;
    font-family: odibee sans;
    margin: 0 auto;
    height: 100%;
    padding: 35px 0px 35px 0px;
  }

  .star {
      height: 254px;
      width: 254px;
      margin-bottom: 20px;
      background-color: red;
    }

  .container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
  }


  @media (min-width: 769px) {
    .container {
      height: 800px; 
    }
  }

  .title {
    font-size: 55px;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 769px) {
    .title {
      font-size: 80px;
    }
  }

  .score {
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 45px;
      border: solid 10px black;
      border-radius: 10px;
      width: 260px;
      height: 217px;
  }

  @media (min-width: 769px) {
    .score {
      width: 400px;
      height: 380px;
    }
  }

  .myPlay {
      text-align: right;
      margin-right: 10px;

  }
  .computerPlay {
      text-align: right;
      margin-right: 10px;
  }


  `;



/*   if ((state.data.currentGame.myPlay) == "piedra") {
    const style = document.createElement("style")
    box.innerHTML = `
    
    <div class="playerone"></div>
    
    `;

    style.innerHTML = `
    
    .playerone {
      background-color: red;
      height: 500px;
      width: 200px;
    }
    
    `
  }
 */




















/*     const display = document.createElement("div")
    setTimeout(() => {
    const result = state.whoWins()

    if (result == "win") {
        results.appendChild(display);
        display.innerHTML = `<img class="star" src=${imageWinURL}></img>`
        display.style.backgroundColor = "#68FF33";    
    }
    if (result == "lose") {
        results.appendChild(display);
        display.innerHTML = `<img class="star" src=${imageLoseURL}></img>`
        display.style.backgroundColor = "#FF4633";    
    }
    if (result == "tie") {
        results.appendChild(display);
        display.innerHTML = `<img class="star" src=${imageTieURL}></img>`
        display.style.backgroundColor = "#6833FF";    
    }

    
    
    }, 1000);  */

  //////////// ESTILOS ////////////

 
  

 


  const buttonElem: any = box.querySelector(".home");
  buttonElem.addEventListener("click", () => {
    params.goTo("/play");
  }); 


  box.appendChild(style)
  return box;
    
    
    
}
