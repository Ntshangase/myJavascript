// node --experimental-modules sort.js

// Bubble sort()  complexity of O(N*N)/(N-squared)
let boxes = [1,7,8,9,2];

function bubbleSort(arr) {
	// loop through array until X[i] <= X[i]+1

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	console.log(arr);
}

// function to run
bubbleSort(boxes);
