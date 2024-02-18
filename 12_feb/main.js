// changecolor function
function changeColor() {
	//now i need to have a math.random which continually cahnges when click.
	// let try with 3 self-defined colors first...2.it will be easier if i
	// create an array with all the colors
	let array = ["green", "brown", "pink", "blue"];

	// random number to be passed in array.// to change color in Javascript.
	document.getElementById("body").style.backgroundColor = `${
		array[Math.floor(Math.random() * array.length)]
	}`;
}

// TIC TAC TOE

// take user input and place it.

// inster symbol function
function insert() {
    let xo = document.getElementById("select1").value
	document.getElementById("C").innerHTML = `${xo}`;
    
}

// restart game
function restart() {
	let boxes = document.getElementById("table").getElementsByTagName("td");

	// a loop to iterate through returned collection and set innerHTML = "";
	for (let count = 0; count < boxes.length; count++) {
		boxes[count].innerHTML = "";
	}
}
