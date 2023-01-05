import * as _ from 'lodash';
import './style.css'

const screen: HTMLInputElement = document.querySelector('#myscreen');
const rightHistory: HTMLInputElement  = document.querySelector('#his-input');
const btn: NodeListOf<HTMLElement> =  document.querySelectorAll('.btn');
const showHistory: HTMLElement  = document.getElementById("history");

let arr: Array<string>  = [];
let operators: Array<string> = ['+', '-', 'X', '/', '(', ')', '%'];
let history: Array<string> = [];

for(var i = 0, item; item = btn[i] ; i++){
    item.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
		let screenValue = screen.value.split('=');
		if (screenValue[0] == 'Ans') {
			rightHistory.value = screen.value;
			screen.value = '';
		}
		arr.push(target.innerText);
		for (let i = 0; i <= arr.length; i++) {
			for (let j = 0; j <= operators.length; j++) {
				if (arr[i] == operators[j] && arr[i-1] == operators[j] ) {
					arr.pop();
					return
				}
			}
		}
		let btntext = target.innerText;
		if (btntext == 'X') {
		btntext = '*'
		}
		screen.value += btntext;		
	})
}

showHistory.style.display = "none";
function toggle(): void {
	if (showHistory.style.display === "none") {
		showHistory.style.display = "block";
	} else if (showHistory.style.display === "block") {
		showHistory.style.display = "none";
	}
}

function equal(): void {
	console.log('history: ', history) 
	rightHistory.value = screen.value + '=';
	let newAnswer = eval(screen.value);
	if (history.slice(-1) != newAnswer) {
		history.push(newAnswer);
	}
	screen.value = 'Ans= ' + newAnswer;
//	showHistory.value = history.slice(-1);
	console.log('n An: ', history)
}

function sin(): void {
	screen.value = 'Ans= ' + Math.sin(parseFloat(screen.value));
}

function cos(): void {
	screen.value = 'Ans= ' + Math.cos(parseFloat(screen.value));
}


function tan(): void {
	screen.value = 'Ans= ' + Math.tan(parseFloat(screen.value));
}

function pow(): void {
	screen.value = 'Ans= ' + Math.pow(parseFloat(screen.value), 2);
}


function sqrt(): void {
	screen.value = 'Ans= ' + Math.sqrt(parseFloat(screen.value));
}

function log(): void {
	screen.value = 'Ans= ' + Math.log(parseFloat(screen.value));
}

function pi(): void {
	screen.value = "3.14159265359";
}

function e(): void {
	screen.value = "2.71828182846";
}