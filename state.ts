type Jugada = "piedra" | "papel" | "tijera";

const state = {

data: {
    currentGame: {
        computerPlay: "",
        myPlay: "",
    },
    
    history: {
        computer: 0,
        me: 0,
    },
},

listeners: [],

initState(){
    const localData = localStorage.getItem("saved-state")
    if (localData !== null){
    this.setState(JSON.parse(localData))}
  },
  
getState(){
    return this.data;
},
  
setState(newState) {
    this.data = newState;
/*     for (const cb of this.listeners) {
      cb();
    } */
    
},

setMove(move: Jugada) {
  const options = ["piedra", "papel", "tijera"]
  const currentState = this.getState();
  currentState.currentGame.myPlay = move;
  currentState.currentGame.computerPlay = options[Math.floor(Math.random() * 3)];
  
  this.pushToHistory()
}, 

whoWins() {

  const currentGame = this.getState();
  const myPlay = currentGame.myPlay

  const computerPlay = currentGame.computerPlay

  const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
  const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
  const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";

  const pcGanaTijeras = myPlay == "papel" && computerPlay == "tijera"
  const pcGanaPiedra = myPlay == "tijera" && computerPlay == "piedra"
  const pcGanaPapel = myPlay == "piedra" && computerPlay == "papel"
  
  const win = [ganeConTijeras, ganeConPiedra, ganeConPapel].includes(true);
  const lose = [pcGanaPapel, pcGanaPiedra, pcGanaTijeras].includes(true);

  let result
  
  if (win == true) {
      result = "win";
  } else if (lose == true){
      result = "lose"
  }else {
      result = "tie";
  } 

  return result
},


   pushToHistory() {
    const result = this.whoWins()
    const currentState = this.getState();
  
    if(result == "win"){
      currentState.history.me++;
    }else if(result == "lose"){
      currentState.history.computer++
    }
    localStorage.setItem("saved-state", JSON.stringify(state.getState()))
  },


/*      const currentState = this.getState();
    const result = this.whoWins();
    const myScore = currentState.history.me;
    const computerScore = currentState.history.computer;

    if (result == "win"){
     this.setState({
       ...currentState,
       history: {
         computer: computerScore + 1,
         me: myScore,
       },
      })
    }

    if (result == "lose") {
      this.setState({
        ...currentState,
        history: {
        computer: computerScore,
         me: myScore + 1,
        }
      })
    }
     localStorage.setItem("current-game", JSON.stringify(state.getState())) 
   } */

   subscribe(cb: (any)=> any) {
    this.listeners.push(cb)
  },
}

export {state}