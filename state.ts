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

/*  listeners: [], */ 

initState(){

     const localData = localStorage.getItem("saved-state")
     console.log("soy los datos locales",localData)
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
  console.log("soy mi move",move)
  const randomMove = options[Math.floor(Math.random() * 3)];
  const pcMove = currentState.currentGame.computerPlay = randomMove;
  console.log("soy el pc move",pcMove)

  this.pushToHistory()
}, 

whoWins() {

  const currentState = this.getState();
  console.log("soy el currentgame",currentState)

  const myPlay = currentState.currentGame.myPlay;
  const computerPlay = currentState.currentGame.computerPlay; 
  console.log("en who wins")
  console.log("my play", myPlay)
  console.log("pc play", computerPlay)
  const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
  const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
  const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";

  const pcGanaTijeras = myPlay == "papel" && computerPlay == "tijera";
  const pcGanaPiedra = myPlay == "tijera" && computerPlay == "piedra";
  const pcGanaPapel = myPlay == "piedra" && computerPlay == "papel";
  
  const win = [ganeConTijeras || ganeConPiedra || ganeConPapel].includes(true);
  const lose = [pcGanaPapel || pcGanaPiedra || pcGanaTijeras].includes(true);

  let result
  
  if (win == true) {
      result = "win";
  } else if (lose == true){
      result = "lose"
  }else {
      result = "tie";
  } 

  console.log("soy el result",result)
  return result
},


pushToHistory() {
const result = this.whoWins()
const currentState = this.getState();
console.log("soy el estado de push to history", currentState)
const computerScore = currentState.history.computer;
console.log("pc play", computerScore)
const myScore = currentState.history.me;

console.log("my play", myScore)

  if (result == "win") {
    this.setState({
      ...currentState,
      history: {
        computer: computerScore,
        me: myScore + 1, 
      },
    });
  }
  if (result == "lose") {
    this.setState({
      ...currentState,
      history: {
        computer: computerScore + 1,
        me: myScore,
      },
    
    });
  }
  if (result == "tie") {
    this.setState({
      ...currentState,
      history: {
        computer: computerScore + 1,
        me: myScore + 1,
      },
    
    });
  }

  localStorage.setItem("saved-state", JSON.stringify(state.getState()))
  console.log("soy el estado al final del history",state.getState())

  /* localStorage.removeItem("saved-state") */
},

/*   subscribe(cb: (any)=> any) {
    this.listeners.push(cb)
  }, */
}

export {state}