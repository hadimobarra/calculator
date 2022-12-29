const template = document.createElement('template');
template.innerHTML = `
<style>
button {
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
</style>
<button class="btn">
	<slot name="title"></slot>
</button>
`

class Rec extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		let clone = template.content.cloneNode(true);
		shadow.appendChild(clone);
	}
}


customElements.define("num-box", Rec);


