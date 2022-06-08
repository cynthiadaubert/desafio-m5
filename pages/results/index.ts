import { state } from "../../state";

const imageWinURL = require("url:../../img/ganaste.png");
const imageLoseURL = require("url:../../img/perdiste.png");
const imageTieURL = require("url:../../img/empate.png");




export function resultsPage(params) {

    const div = document.createElement("div")
    div.innerHTML = `
    <img>
    <div class="results">
        <h1>Resultado</h1>
        <div class="myPlay"> Vos: ${state}</div>


    </div>
    
    
    
    
    `

return div
}
