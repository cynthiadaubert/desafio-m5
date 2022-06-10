import { state } from "../../state"

const piedra = require("url:../../img/piedra.png");
const papel = require("url:../../img/papel.png");
const tijera = require("url:../../img/tijera.png");

const imageWinURL = require("url:../../img/ganaste.png");
const imageLoseURL = require("url:../../img/perdiste.png");
const imageTieURL = require("url:../../img/empate.png");

export function resultsPage() {
const currentState = state.getState()
const div = document.createElement("div")
  const results = document.createElement("div")
  const score = document.createElement("div")

  const myPlay =
        currentState.currentGame.myPlay == "piedra" ? piedra : currentState.currentGame.myPlay == "papel"
          ? papel
          : tijera;

    const computerPlay =
        currentState.currentGame.computerPlay == "piedra"
          ? piedra
          : currentState.currentGame.computerPlay == "papel"
          ? papel
          : tijera;

  results.innerHTML = ` 
  <img class="computerHand" src=${piedra}>
  <img class="myHand" src=${papel} >
  
  `;

  /* src=${computerPlay} */

  /* src=${myPlay} */ 
  ////// MOSTRAR RESULTADO ESTRELLA //////
  
   const myResult = state.data.history.me;
  const pcResult = state.data.history.me;

  console.log("mi result",myResult, pcResult)


  const display = document.createElement("div")
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

    score.innerHTML = `
  
    <div class="container">
        <div class="score">
            <h1>Score</h1>
            <div class="myPlay"> Vos:${currentState.history.me}</div>
            <div class="computerPlay"> Máquina:${currentState.history.computer}</div>
        </div>
  
        <button-comp class="home">Volver a jugar</button-comp>
    </div>    
    `;
    
  }, 2000);

  const style = document.createElement("style")

  style.innerHTML =`

  .root {
    margin: 0 auto;
    box-sizing: border-box;
  }

  .star {
      height: 254px;
      margin-bottom: 20px;
  }

  .container {
      text-align: center;
      font-size: 55px;
      display: flex;
      flex-direction: column;
      border: solid 10px black;
      padding: 36px 0px;
      /* padding left y right no funiona */
  }

  .score {
      background-color: white;
      display: flex;
      flex-direction: column;
      font-size: 45px;
      border: solid 10px black;
      border-radius: 10px;
      width: 260px;
      height: 250px;
  }

  .myPlay {
      text-align: right;
      margin-right: 10px;

  }
  .computerPlay {
      text-align: right;
      margin-right: 10px;
  }


  `

    div.appendChild (results)
    div.appendChild(style)
    score.appendChild(style)
    return score
    
}
