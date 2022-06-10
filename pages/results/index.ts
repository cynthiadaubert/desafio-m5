import {initRouter} from "../../router"
import { state } from "../../state"

const imageWinURL = require("url:../../img/ganaste.png");
const imageLoseURL = require("url:../../img/perdiste.png");
const imageTieURL = require("url:../../img/empate.png");

export function resultsPage(params) {
    console.log("soy el params result",params)

///////////////JUEGO////////////////



  const div = document.createElement("div")

  div.innerHTML = `
  
  <div class="results">
      <img class="star" src=${imageWinURL}></img>
      <div class="score">
          <h1>Score</h1>
          <div class="myPlay"> Vos:?</div>
          <div class="computerPlay"> Máquina:?</div>
      </div>

      <button-comp class="home">Volver a jugar</button-comp>
  </div>    
  `;

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

  .results {
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
  
/*   const buttonHome = document.querySelector(".home")
  buttonHome.addEventListener("selected",(e:any)=>{  
      console.log(e.detail.route)
  params.goTo(e.detail.route);
  });    */
 

    div.appendChild(style)
    return div
    
}
