function n(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequire4c92;null==a&&((a=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var a={id:n,exports:{}};return t[n]=a,e.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){i[n]=e},e.parcelRequire4c92=a),a.register("27Lyk",(function(e,t){var i,a;n(e.exports,"register",(()=>i),(n=>i=n)),n(e.exports,"resolve",(()=>a),(n=>a=n));var r={};i=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)r[e[t]]=n[e[t]]},a=function(n){var e=r[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a("27Lyk").register(JSON.parse('{"fKftx":"index.0a360b24.js","dUsoY":"piedra.5f8affe9.png","3VkPz":"papel.1c0a1bfb.png","1G19l":"tijera.7ced7280.png","7fSng":"ganaste.7853880a.png","jF8gK":"perdiste.7a201829.png","kg3g2":"empate.c5ec0ccf.png"}'));const r={data:{currentGame:{computerPlay:"",myPlay:""},history:{computer:0,me:0}},initState(){const n=localStorage.getItem("saved-state");null!==n&&this.setState(JSON.parse(n))},getState(){return this.data},setState(n){this.data=n},setMove(n){const e=this.getState();e.currentGame.myPlay=n;const t=["piedra","papel","tijera"][Math.floor(3*Math.random())];e.currentGame.computerPlay=t;this.pushToHistory()},whoWins(){const n=this.getState(),e=n.currentGame.myPlay,t=n.currentGame.computerPlay,i="papel"==e&&"tijera"==t,a="tijera"==e&&"piedra"==t,r="piedra"==e&&"papel"==t,o=["tijera"==e&&"papel"==t||"piedra"==e&&"tijera"==t||"papel"==e&&"piedra"==t].includes(!0),s=[r||a||i].includes(!0);let d;return d=1==o?"win":1==s?"lose":"tie",d},pushToHistory(){const n=this.whoWins(),e=this.getState(),t=e.history.computer,i=e.history.me;"win"==n&&this.setState({...e,history:{computer:t,me:i+1}}),"lose"==n&&this.setState({...e,history:{computer:t+1,me:i}}),"tie"==n&&this.setState({...e,history:{computer:t,me:i}}),localStorage.setItem("saved-state",JSON.stringify(r.getState()))}};var o;o=new URL(a("27Lyk").resolve("dUsoY"),import.meta.url).toString();var s;s=new URL(a("27Lyk").resolve("3VkPz"),import.meta.url).toString();var d;d=new URL(a("27Lyk").resolve("1G19l"),import.meta.url).toString();var c;c=new URL(a("27Lyk").resolve("7fSng"),import.meta.url).toString();var l;l=new URL(a("27Lyk").resolve("jF8gK"),import.meta.url).toString();var p;p=new URL(a("27Lyk").resolve("kg3g2"),import.meta.url).toString();function m(){return location.host.includes("github.io")}const h=[{path:/\/welcome/,component:function(n){const e=document.createElement("div");e.className="box",e.innerHTML='\n \n    <h1 class="title">Piedra papel o tijera</h1>\n    \n    <button-comp>Empezar</button-comp>\n    \n    <hands-comp class="hands"></handscomp>\n   \n  ';const t=document.createElement("style");return t.innerHTML="\n\n  body {\n    box-sizing: border-box;\n    margin: 0 auto;\n  \n  }\n\n  .root {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n  }\n\n  @media (min-width: 769px) {\n    .box {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      height: 100%;\n      max-width: 800px;\n      margin: 0 auto;\n      padding: 0px;\n    }\n  }\n\n .title {\n    font-size: 80px;\n    font-family: courier new;\n    text-align: center;\n    width: 284px;\n    height 204px;\n    font-style: bold;\n    color: #009048;\n    margin: 100px 0px 50px ;\n    padding; 0;\n    \n  }\n\n  @media (min-width: 769px) {\n    .title {\n      font-size: 100px;\n      width: 80%;\n      height 80%;\n     \n    }\n  }\n  \n  .hands {\n    margin-top: 86px;\n    padding: 0;\n    bottom: 0,\n  }\n\n\n  @media (min-width: 769px) {\n    .hands {\n      display: flex;\n      justify-content: center;\n      width: 100%;\n      position: fixed;\n      margin-left: 176px;\n    }\n  }\n  \n  ",e.querySelector("button-comp").addEventListener("click",(()=>{n.goTo("/instructions")})),e.appendChild(t),e}},{path:/\/instructions/,component:function(n){const e=document.createElement("div");e.className="box",e.innerHTML='\n   \n      <h1 class="text">Presioná jugar\n      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>\n      \n      <button-comp class=button">¡Jugar!</button-comp>\n    \n      <hands-comp class="hands"></handscomp>\n      \n    ';const t=document.createElement("style");return t.innerHTML="\n\n    body {\n      box-sizing: border-box;\n      margin: 0 auto;\n    }\n\n    .box {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      height: 100vh;\n    }\n  \n    @media (min-width: 769px) {\n      .box {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        height: 100%;\n        max-width: 500px;\n        margin: 0 auto;\n        margin-right: 756px;\n        padding-top: 0px;\n      }\n    }\n  \n    .hands {\n      margin-top: 80px;\n      padding: 0;\n      bottom: 0,\n    }\n  \n  \n    @media (min-width: 769px) {\n      .hands {\n       margin-right: 365px;\n      }\n    }\n    \n   .text {\n    background-image: none;\n      font-size: 40px;\n      font-family: courier new;\n      width: 316px;\n      height 240px;\n      text-align: center;\n      margin: 100px 0px 50px 0px;\n      padding: 0;\n    }\n  \n    @media (min-width: 769px) {\n      .text {\n        font-size: 50px;\n        width: 100%;\n        height 100%;\n        margin-left: 60px;\n      }\n    }\n\n    ",e.querySelector("button-comp").addEventListener("click",(()=>{n.goTo("/play")})),e.appendChild(t),e}},{path:/\/play/,component:function(n){const e=document.createElement("div");e.className="container-play",e.innerHTML='\n \n    <div class=circle></div>\n\n    <hands-container class="hands">\n      <hands-comp class="hands-comp" variant="selected"></hands-comp>\n    </hands-container>\n  \n  ';const t=document.createElement("style");t.innerHTML="\n\n  .root {\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 118px 0px 80px 0px;\n    width: 100%;\n  }\n\n  @media (min-width:769px) {\n    .root {\n      height: 100vh;\n      width: 100%;\n    }\n  }\n\n  .circle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    width: 243px;\n    height: 243px;\n    padding: 20px 0px 0px 0px;\n    margin-bottom: 80px;\n    background-color: none;\n    border: 24px solid #000;\n    color: #000;\n    text-align: center;\n    font-family: arial black;\n    font-size: 100px;\n    animation: loading 3s forwards;\n    animation-delay: 1s;\n  }\n\n  .hands {\n    margin: 0;\n    position: fixed;\n    bottom: 0;\n  }\n\n  @media (min-width:769px) {\n    .hands {\n      width: 100%;\n      position: fixed;\n      margin-left: -40px;\n    }\n  }\n\n\n  @keyframes loading {\n\n    0% {\n      \n      border-top: 24px solid grey;\n      border-right: 24px solid black;\n      border-bottom: 24px solid black;\n      border-left: 24px solid black;\n    }\n\n    25% {\n  \n      border-right: 24px solid grey;\n      border-bottom: 24px solid black;\n      border-left: 24px solid black;\n    }\n\n    75% {\n      \n      border-right: 24px solid white;\n      border-bottom: 24px solid white;\n      border-left: 24px solid black;\n    }\n\n    100% {\n      border-top: 24px solid white;\n      border-right: 24px solid white;\n      border-bottom: 24px solid white;\n      border-left: 24px solid white;\n    }\n\n    .transparent {\n      opacity: 50%;\n    }\n\n  }\n\n  ";let i=3;const a=e.querySelector(".circle"),r=setInterval((()=>{a.innerHTML=`${i}`,i--,i<0&&(n.goTo("/instructions"),clearInterval(r))}),1e3);return e.querySelector(".hands").addEventListener("click",(()=>{clearInterval(r),setTimeout((()=>{n.goTo("/desafio-m5/showhands")}),1e3)})),e.appendChild(t),e}},{path:/\/showhands/,component:function(n){const e=r.getState(),t=e.currentGame.myPlay,i=e.currentGame.computerPlay,a=document.createElement("div");a.className="box","piedra"==t&&"papel"==i&&(a.innerHTML=`\n        <img class="computer-hand" src=${s}>\n        <img class="player-hand" src=${o}>\n        \n        `),"piedra"==t&&"piedra"==i&&(a.innerHTML=`\n        <img class="computer-hand" src=${o}>\n        <img class="player-hand" src=${o}>\n        \n        `),"piedra"==t&&"tijera"==i&&(a.innerHTML=`\n        <img class="computer-hand" src=${d}>\n        <img class="player-hand" src=${o}>\n        \n        `),"papel"==t&&"papel"==i&&(a.innerHTML=`\n        <img class="computer-hand" src=${s}>\n        <img class="player-hand" src=${s}>\n        \n        `),"papel"==t&&"piedra"==i&&(a.innerHTML=`\n        <img class="computer-hand" src=${o}>\n        <img class="player-hand" src=${s}>\n        \n        `),"papel"==t&&"tijera"==i&&(a.innerHTML=`\n        <img class="computer-hand" src=${d}>\n        <img class="player-hand" src=${s}>\n        \n        `),"tijera"==t&&"tijera"==i&&(a.innerHTML=`\n        <img class="computer-hand" src=${d}>\n        <img class="player-hand" src=${d}>\n        \n        `),"tijera"==t&&"piedra"==i&&(a.innerHTML=`\n        <img class="computer-hand" src=${o}>\n        <img class="player-hand" src=${d}>\n        \n        `),"tijera"==t&&"papel"==i&&(a.innerHTML=`\n        <img class="computer-hand" src=${s}>\n        <img class="player-hand" src=${d}>\n        \n        `);const c=document.createElement("style");return c.innerHTML="\n\n    .box {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .computer-hand {\n        width: 102px;\n        height: 230px;\n        transform:rotate(180deg);\n    }\n\n    .player-hand {\n        width: 102px;\n        height: 230px;\n        position: fixed;\n        bottom: 0;\n\n    }\n\n    @media (min-width:769px) {\n        .computer-hand {\n            width: 157px;\n            height: 320px;\n\n        }\n    }\n\n    @media (min-width:769px) {\n        .player-hand {\n            width: 157px;\n            height: 320px;\n        } \n    }\n\n    ",setTimeout((()=>{n.goTo("/results")}),3e3),a.appendChild(c),a}},{path:/\/results/,component:function(n){const e=document.createElement("div"),t=document.createElement("style"),i=r.getState();let a=r.whoWins();a="win"==r.whoWins()?c:"lose"==r.whoWins()?l:p,e.innerHTML=`\n\n    <div class="container">\n      <img class="star" src=${a}>\n      <div class="score">\n        <h1 class="title">Score</h1>\n        <div class="myPlay"> Vos:${i.history.me}</div>\n        <div class="computerPlay"> Máquina:${i.history.computer}</div>\n      </div>\n\n      <button-comp class="home">Volver a jugar</button-comp>\n      <button-comp class="reset">Reiniciar puntaje</button-comp>\n    </div>    \n  `,t.innerHTML="\n\n  .root {\n    box-sizing: border-box;\n    font-family: odibee sans;\n    margin: 0 auto;\n    height: 100%;\n    padding: 35px 0px 35px 0px;\n  }\n\n  .star {\n      height: 254px;\n      width: 254px;\n      margin-bottom: 20px;\n    }\n\n  .container {\n      text-align: center;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n  }\n  \n  .win {\n    background-color: rgba(136, 137, 73, 0.9);\n    height: 100vh;\n  }\n  \n  .lose {\n    background-color: rgba(137, 73, 73, 0.9);\n    height: 100vh;\n  }\n\n  .tie {\n    background-color: rgba(139, 76, 167, 0.9);\n    height: 100vh;\n  }\n\n  @media (min-width: 769px) {\n    .container {\n      height: 800px; \n    }\n  }\n\n  .title {\n    font-size: 55px;\n    margin: 0;\n    padding: 0;\n  }\n\n  @media (min-width: 769px) {\n    .title {\n      font-size: 80px;\n    }\n  }\n\n  .score {\n      background-color: white;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      font-size: 45px;\n      border: solid 10px black;\n      border-radius: 10px;\n      width: 260px;\n      height: 217px;\n  }\n\n  @media (min-width: 769px) {\n    .score {\n      width: 400px;\n      height: 380px;\n    }\n  }\n\n  .myPlay {\n      text-align: right;\n      margin-right: 10px;\n\n  }\n  .computerPlay {\n      text-align: right;\n      margin-right: 10px;\n  }\n\n  .reset {\n    margin-bottom: 35px;\n  }\n\n  ";let o=r.whoWins();return o="win"==r.whoWins()?"win":"lose"==r.whoWins()?"lose":"tie",document.body.className=o,e.querySelector(".home").addEventListener("click",(()=>{n.goTo("/desafio-m5/play")})),e.querySelector(".reset").addEventListener("click",(()=>{console.log("puntaje reiniciado"),localStorage.setItem("saved-state",JSON.stringify({currentGame:{computerPlay:"",myPlay:""},history:{computer:0,me:0}})),n.goTo("/")})),e.appendChild(t),e}}];function g(n){function e(n){const e=m()?"/desafio-m5"+n:n;history.pushState({},"",e),t(e)}function t(t){const i=m()?t.replace("/desafio-m5",""):t;for(const t of h)if(t.path.test(i)){const i=t.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(i)}}"/desafio-m5/"==location.pathname?e("/welcome"):t(location.pathname),window.onpopstate=function(){t(location.pathname)}}!function(){customElements.define("button-comp",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const n=document.createElement("button");n.className="button";const e=document.createElement("style");e.innerHTML="\n                \n        .button {\n    \n        background-color: #006CFC;\n        font-size: 45px;\n        border: 10px solid #001997;\n        border-radius: 10px;\n        min-width: 300px;\n        height: 87px;\n        font-family: Odibee sans;\n        color: #D8FCFC;\n        margin-top: 20px;\n        }\n\n        @media (min-width: 769px) {\n          .button {\n            min-width: 600px;\n            margin-top: 60px;\n          }\n        }\n                \n        ",n.textContent=this.textContent,this.shadow.appendChild(n),this.shadow.appendChild(e)}}),customElements.define("hands-comp",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const n=document.createElement("div"),e=document.createElement("style");n.className="hands",n.innerHTML=`\n  \n          <img variant="selected" class="piedra" src=${o}>\n          <img variant="selected" class="papel" src=${s}>\n          <img variant="selected" class="tijera" src=${d}>\n  \n        `,e.innerHTML="\n\n          img {\n            width: 56px,\n            height: 126px;\n          }\n\n          @media (min-width:769px) {\n            img{\n              width: 80px;\n              height: 180px;\n            }\n          }\n\n          .piedra {\n              padding-right: 40px;\n          }\n\n          .papel {\n              padding-right:40px;\n          }\n\n          @media (min-width:769px){\n            .hands {\n              width: 500px;\n              position: fixed;\n              bottom: 0;\n            }\n          }\n\n          .transparent {\n              opacity: 0.5;\n          }\n            \n          ";const t=n.querySelector(".piedra"),i=n.querySelector(".papel"),a=n.querySelector(".tijera");"selected"==this.getAttribute("variant")&&t.addEventListener("click",(()=>{i.classList.add("transparent"),a.classList.add("transparent"),r.setMove("piedra")})),"selected"==this.getAttribute("variant")&&i.addEventListener("click",(()=>{t.classList.add("transparent"),a.classList.add("transparent"),r.setMove("papel")})),"selected"==this.getAttribute("variant")&&a.addEventListener("click",(()=>{i.classList.add("transparent"),t.classList.add("transparent"),r.setMove("tijera")})),this.shadow.appendChild(e),this.shadow.appendChild(n)}}),r.initState();g(document.querySelector(".root"))}();
//# sourceMappingURL=index.0a360b24.js.map
