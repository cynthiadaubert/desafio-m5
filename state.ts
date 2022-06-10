type Jugada = "piedra" | "papel" | "tijera";

const state = {

data: {
    currentGame: {
        computerPlay: "",
        myPlay: "",
    },
    
    history: {
        computer: "",
        me: "",
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
    for (const cb of this.listeners) {
      cb();
    }
    localStorage.setItem("saved-state", JSON.stringify(newState));
},

setMove(move: Jugada) {
  const options = ["piedra", "papel", "tijera"]
  const currentState = this.getState();
  currentState.currentGame.myPlay = move;
  currentState.currentGame.computerPlay = options[Math.floor(Math.random() * 3)];
  
  this.historyPushState()
}, 

whoWins(myPlay: Jugada, computerPlay: Jugada) {

     const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
     const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
     const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
 
     const pcGanaTijeras = myPlay == "papel" && computerPlay == "tijera"
     const pcGanaPiedra = myPlay == "tijera" && computerPlay == "piedra"
     const pcGanaPapel = myPlay == "piedra" && computerPlay == "papel"
     
     const win = [ganeConTijeras, ganeConPiedra, ganeConPapel].includes(true);
     const lose = [pcGanaPapel, pcGanaPiedra, pcGanaTijeras].includes(true);
 
     
     if (win == true) {
       return "win";
     } else if (lose == true){
       return "lose"
     }else {
       return "tie";
     } 
   },


   historyPushState() {
    const result = this.whoWins()
    const currentState = this.getState();
  
    if(result == "win"){
      currentState.history.me++;
    }else if(result == "lose"){
      currentState.history.computer++
    }
    this.setState(currentState)
  },


   subscribe(cb: (any)=> any) {
    this.listeners.push(cb)
  },
}

export {state}