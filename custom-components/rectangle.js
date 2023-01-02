var screen = document.querySelector("#myscreen");

class Rec extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const button = document.createElement("button");
    button.setAttribute("class", "btn");

    const id = this.getAttribute("id");
    button.setAttribute("id", id);

    const title = document.createElement("span");
    title.setAttribute("class", "title");

    const text = this.getAttribute("text");

    title.textContent = text;

    const style = document.createElement("style");
    style.textContent = `
		.btn {
			width: 90px;
			height: 40px;
			background: #f1f3f4;
			border: none;
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 40;
			cursor: pointer;
			font-size: .9rem;
			margin: 3px;
		}
		.title {
			font-weight: bold;
		}
		`;
    button.appendChild(title);
    button.appendChild(style);
    shadow.appendChild(button);

    const hasFunction = this.getAttribute("onclick");
    button.addEventListener("click", (e) => {
      if (hasFunction == null) {
        var btntext = e.target.innerText;
        if (btntext == "X") {
          btntext = "*";
        }
        screen.value += btntext;
      }
    });
  }
}

customElements.define("num-box", Rec);
