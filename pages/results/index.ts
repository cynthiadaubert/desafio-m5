import { start } from "repl";
import { state } from "../../state"

const piedra = require("url:../../img/piedra.png");
const papel = require("url:../../img/papel.png");
const tijera = require("url:../../img/tijera.png");

const imageWin = require("url:../../img/ganaste.png");
const imageLose = require("url:../../img/perdiste.png");
const imageTie = require("url:../../img/empate.png");



export function resultsPage(params) {

  const div = document.createElement("div")
  const box = document.createElement("div")
  const style = document.createElement("style")
  const star = document.createElement("div")

  const currentState = state.getState()
  console.log("soy el estado de la page results", currentState)

  let res = state.whoWins()

  if (state.whoWins() == "win") {
    res = imageWin;
    
  } else if (state.whoWins() == "lose"){
    res = imageLose;
  } else {
    res = imageTie;
  }


  box.innerHTML = `

    <div class="container">
      <img class="star" src=${res}>
      <div class="score">
        <h1 class="title">Score</h1>
        <div class="myPlay"> Vos:${currentState.history.me}</div>
        <div class="computerPlay"> Máquina:${currentState.history.computer}</div>
      </div>

      <button-comp class="home">Volver a jugar</button-comp>
      <button-comp class="reset">Reiniciar puntaje</button-comp>
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
    }

  .container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
  }
  
  .win {
    background-color: rgba(136, 137, 73, 0.9);
    ;
  }
  
  .lose {
    background-color: rgba(137, 73, 73, 0.9);
    ;
  }

  .tie {
    background-color: rgba(139, 76, 167, 0.9)
    ;
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

  /////////// MOSTRAR IMAGEN Y COLOR FONDO SEGUN RESULTADO ////////////

  

  let result = state.whoWins()


    if (state.whoWins() == "win") {
      result = "win"; 
    } else if (state.whoWins() == "lose"){
      result = "lose" 
    } else {
      result = "tie" 
    }
    
    document.body.className = result;
    
  
console.log("soy reeeeeeeeeeeeeees",res)

  
  //////////// BOTON VOLVER A JUGAR Y REINICIAR PUNTAJE ////////////

  const buttonElem: any = box.querySelector(".home");
  buttonElem.addEventListener("click", () => {
    params.goTo("/play");
  }); 

  const buttonReset: any = box.querySelector(".reset");
  buttonReset.addEventListener("click", () => {
    console.log("puntaje reiniciado")
    localStorage.setItem("saved-state",JSON.stringify({
      currentGame: {
        computerPlay: "",
        myPlay: "",
    },
    
    history: {
        computer: 0,
        me: 0,
    },
    }));
    params.goTo("/welcome");
    location.reload();
  }); 


  box.appendChild(style)
  return box;
}

