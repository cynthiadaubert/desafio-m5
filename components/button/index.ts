export function buttonComp() {
  customElements.define(
    "button-comp",

    class extends HTMLElement {
      constructor() {
        super();
        this.render();
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
                  width: 322px;
                  height: 87px;
                  font-family: Odibee sans;
                  color: #D8FCFC;
                  width: 100%;
                }
                
                `;

        button.textContent = this.textContent
        shadow.appendChild(button); 
        shadow.appendChild(style);
      }
    }
  );
}
