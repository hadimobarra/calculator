'use strict'

var screen = document.querySelector('#myscreen');
var rightHistory = document.querySelector('#his-input');
var btn =  document.querySelectorAll('.btn');
var showHistory = document.getElementById("history");


let arr = [];
let operators = ['+', '-', 'X', '/', '(', ')', '%'];
let history = [];

for (let item of btn) {
	item.addEventListener('click', (e) => {
		let screenValue = screen.value.split('=');
		if (screenValue[0] == 'Ans') {
			rightHistory.value = screen.value;
			screen.value = '';
		}
		arr.push(e.target.innerText);
		for (let i = 0; i <= arr.length; i++) {
			for (let j = 0; j <= operators.length; j++) {
				if (arr[i] == operators[j] && arr[i-1] == operators[j] ) {
					arr.pop();
					return
				}
			}
		}
		let btntext = e.target.innerText;
		if (btntext == 'X') {
		btntext = '*'
		}
		screen.value += btntext;		
	})
}

showHistory.style.display = "none";
function toggle() {
	if (showHistory.style.display === "none") {
		showHistory.style.display = "block";
	} else if (showHistory.style.display === "block") {
		showHistory.style.display = "none";
	}
}


function equal() {
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

function sin() {
	screen.value = 'Ans= ' + Math.sin(screen.value);
}

function cos() {
	screen.value = 'Ans= ' + Math.cos(screen.value);
}


function tan() {
	screen.value = 'Ans= ' + Math.tan(screen.value);
}

function pow() {
	screen.value = 'Ans= ' + Math.pow(screen.value, 2);
}


function sqrt() {
	screen.value = 'Ans= ' + Math.sqrt(screen.value, 2);
}

function log() {
	screen.value = 'Ans= ' + Math.log(screen.value);
}

function pi() {
	screen.value = 3.14159265359;
}

function e() {
	screen.value = 2.71828182846;
}

function fact() {
	var num = screen.value;
	var f = 1;
	for (var i = 1; i <=num; i += 1) {
		f *=i
	}
	i -= 1;

	screen.value = 'Ans= ' + f;
}

function backspc() {
	screen.value = screen.value.substr(0, screen.value.length-1);
}
