export function buttonComp(params) {
  customElements.define(
    "button-comp",

    class ButtonComp extends HTMLElement {
      shadow: ShadowRoot; 
      constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" }); 
      }

      connectedCallback(){


        this.render()
      }

      render() {

        const button = document.createElement("button")
        button.className = "button";
        const style = document.createElement("style");
        style.innerHTML = `
                
        .button {
    
        background-color: #006CFC;
        font-size: 45px;
        border: 10px solid #001997;
        border-radius: 10px;
        min-width: 300px;
        height: 87px;
        font-family: Odibee sans;
        color: #D8FCFC;
        margin-top: 20px;
        }
                
        `;

        
        
/*         this.textContent = this.getAttribute("text");
          button.addEventListener("click", ()=>{
                    if (this.textContent == "Volver a jugar"){
            params.goTo("./instructions")
          }
        }) */


        button.textContent = this.textContent
        this.shadow.appendChild(button)
        this.shadow.appendChild(style);
         
      }
    }
  )
};
