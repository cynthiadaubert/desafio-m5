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

    /*  (HISTORIAL DE JUGADAS, arranca vacio y tiene que recuperarr la ultima version del local storage) */
    history: [{}],
  },

  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay;
  },

  pushToHistory(play: Game) {
    const currentState = this.getState();
    currentState.history(play);
  },

  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    /* (lo mejor seria usar un array) aca va la logica de los ifs o algun chequeador rustico que se fije en que condiciones gano yo y en cuales gana la pc o hay empate */

    /*    puede devolver un cero o 1 o un texto */

    const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
    const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
    const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";

    const gane = [ganeConTijeras, ganeConPiedra, ganeConPapel].includes(true);

    /*    esta funcion (whowins) es un utilitario, solamente sirve para resolver la duda del resultado. No altera ni lee el estado sino que recibe dos parámetros y los devuelve */
    /*    podemos guardar los datos del resultado, pero lo ideal es no acumular datos de más */
  },
};

/* state.setMove("piedra") */

state.pushToHistory({ computerPlay: "piedra", myPlay: "tijera" });

/* este pushtohistory activa internamente un set state que a su vez activa un set local storage */

export { state };
