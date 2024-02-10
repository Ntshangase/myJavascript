//Take age of both parents/2
let x = 0;
let y = 0;

function Submit() {
	// load the input.values to a variable for manipulation later
	x = document.getElementById("motherAge").value;
	y = document.getElementById("fatherAge").value;

	// clear the input fields
	document.getElementById("motherAge").value = "";
	document.getElementById("fatherAge").value = "";
}

function Reveal() {
    let gender;
	let Age = Number(x) + Number(y); /**if you declare this outside a function, 
    it become non-static and remains zero and doen't update. */

	// if Age/2 < 60, gender = non-binary
	if (Age <= 60) {
		gender = "Non-Binary";
	} else if (Age > 60 && Age % 2 === 0) {
		// if Age/2 > 60 && even number, gender = male
		gender = "male";
	} else if (Age > 60 && Age % 2 != 0) {
		// Age2 > 60 && odd number, gender = female
		gender = "female";
	}

	/**making the page static */
	let page = document.getElementById("show");
	let hidden = page.getAttribute("hidden");

	if (hidden) {
		page.removeAttribute("hidden");
		//button.innerText("clear")
	} else {
		page.setAttribute("hidden", "hidden");
		//button.innerText("Veza");
	}

	// try-write javascript html.
	document.getElementById(
		"static"
	).innerHTML = `The Gender of your child is: ${gender} and your age is: ${Age} `;
}
