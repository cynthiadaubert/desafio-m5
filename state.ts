type Jugada = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};

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
  
    const localData = localStorage.getItem("saved-game")
    if (localData !== null){
    this.setState(JSON.parse(localData))}
  },
  
getState(){
    return this.data;
},
  
setState(newState) {
    this.data = newState;
    console.log("nuevoestado",newState)
    for (const cb of this.listeners) {
      cb();
    }
    localStorage.setItem("saved-game", JSON.stringify(newState));
},

randomMove(){
  const numbers = [1,2,3]
  const randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber]
  
},



setMove(move: Jugada) {
    const currentState = this.getState();
    const myMove = currentState.currentGame.myPlay = move;
    const computerMove = currentState.currentGame.computerPlay = this.randomMove();
    this.setState(myMove,computerMove)
},

whoWins(myPlay: Jugada, computerPlay: Jugada) {

    const currentState = this.getState()
 
     const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
     const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
     const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
 
     const pcGanaTijeras = myPlay == "papel" && computerPlay == "tijera"
     const pcGanaPiedra = myPlay == "tijera" && computerPlay == "piedra"
     const pcGanaPapel = myPlay == "piedra" && computerPlay == "papel"
 
     const empatePiedra = myPlay == "piedra" && computerPlay == "piedra";
     const empatePapel = myPlay == "papel" && computerPlay == "papel";
     const empateTijera = myPlay == "tijera" && computerPlay == "tijera";
 
     
     const win = [ganeConTijeras, ganeConPiedra, ganeConPapel].includes(true);
     const lose = [pcGanaPapel, pcGanaPiedra, pcGanaTijeras].includes(true);
     const tie = [empatePiedra, empatePapel, empateTijera].includes(true)
 
     if (win == true) {
       currentState.history.me++;
     } else if (lose == true){
       currentState.history.computer++
     }else if (tie) {
       return "tie"
     } 
   },
 
   subscribe(cb: (any)=> any) {
       this.listeners.push(cb)
   }

}

export {state}