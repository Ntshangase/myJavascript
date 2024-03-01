// node --experimental-modules search.js

//tsting
let Stack = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let girl = "I love you jesus";
function test(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
	console.log(num);
}

//linear sear
function linear_search() {
	const Array = [1, 2, 3, 4];
	const number = 3;

	for (let i = 0; i < Array.length; i++) {
		if (Array[i] === number) {
			console.log("true"); // not good practise to return inside Loop
		}
	}
}

// Binary search.
let boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a = 3;
function binarySearch(arr, needle) {
	let low = 0;
	let high = arr.length;

	median = Math.floor(low + (high - low) / 2);
	currentValue = arr[median];

	do {

		if (currentValue === needle) {
			console.log("we have found you beanie :", value)
		} else if (currentValue > needle) {
			high = median;
		} else {
			low = median + 1;
		}
	} while (low < high);

    console.log("runned");
}

//function to run.
binarySearch(boxes,a);
