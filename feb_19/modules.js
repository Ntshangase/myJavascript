/**A javascript file cannot communicate between 2 Dom at the same time. */

// There can only be oe Dom.
export function displayModule() {
	let textDiv = document.querySelector(".to_nav");
	textDiv.innerHTML = `<div class="nav"> 
    <a href="index.html" class="nav-item">Home</a>
    <a href="About.html" class="nav-item">About</a>
    <a href="Contact.html" class="nav-item">Contact</a>
    </div>`;
}

