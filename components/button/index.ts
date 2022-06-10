export function buttonComp(params) {
  customElements.define(
    "button-comp",

    class extends HTMLElement {
      shadow: ShadowRoot;
      constructor() {
        super();
        this.render();
      }

      connectedCallback(){
        this.addCallbacks()
        this.render()
      }

      addCallbacks() {
        this.shadow.querySelector(".root").addEventListener("click", (e) => {
          const event = new CustomEvent("selected", {
            detail: {
              route: "/instructions"
            },
          });
          this.dispatchEvent(event);
        });
      }

      render() {
        const shadow = this.attachShadow({ mode: "open" }); 
        const button = document.createElement("button");
        const style = document.createElement("style");
        button.className = "root";

        style.innerHTML = `
                
                .root {
    
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

        button.textContent = this.textContent

/*         if (button.textContent == "Volver a jugar"){
                  params.goTo("./instructions")
        }
 */

        shadow.appendChild(button); 
        shadow.appendChild(style);

        
      }


    }
  );
}
