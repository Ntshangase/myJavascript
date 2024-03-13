// changecolor function
function changeColor() {
	//now i need to have a math.random which continually cahnges when click.
	// let try with 3 self-defined colors first...2.it will be easier if i
	// create an array with all the colors
	let array = ["white", "#121212"];

	// random number to be passed in array.// to change color in Javascript.
	document.getElementById("body").style.backgroundColor = `${
		array[Math.floor(Math.random() * array.length)]
	}`;
}

// TIC TAC TOE

// take user input and place it.

// inster symbol function
function insert() {
	let xo = document.getElementById("select1").value; //get X/O value

	let position = document.getElementById("select2").value;

	//write to game
	if (xo != "select" && position != "selected") {
		document.getElementById(`${position}`).innerHTML = `${xo}`;
	} else if (xo != "selected" && position === null ) { // position can never === "selected"
		alert(" please choose postion to place x/o");
	} else if (xo === "selected" && position != "selected") {
		window.alert(" position to place ");
	} else {
		alert(" plase select sign + position to move ");
	}
}

// restart game
function restart() {
	let boxes = document.getElementById("table").getElementsByTagName("td");

	// a loop to iterate through returned collection and set innerHTML = "";
	for (let count = 0; count < boxes.length; count++) {
		boxes[count].innerHTML = "";
	}
}
