
// node --experimental-modules amazon.js

const abc = [1,2,3,4,5,6,7,8,9]
// linear search
function linearSearch(arr,x){
    for(let i=0; i < arr.length; i++){
        if(arr[i] === x){
            console.log(arr[i],"is equall to", x);
        }
    }
}

// binary search
function binarySearch(arr,neddle){
    // high and low
    let low = 0;
    let high = arr.length;

    //loop through the arr, by cutting it in half until while low < high
    do{
        // find the median and median value.
        let median = Math.floor(low + (high - low)/2);
        let medianValue = arr[median];
        // everytime we cut the arr in half and check if our median.value === input.
        if(medianValue === neddle){
            console.log("binarySearch complete");
            console.log(medianValue, "eqauls to: ", neddle);
            return;
        } else if(medianValue > neddle){
            high = median;
        } else { low = median + 1}
    }while(low < high)
}

// bubble Sort()
// we are going to iterate through the array and return an X > X + 1
let cba = [3,5,9,1,4,0]
function bubbleSort(arr){
    // iterate through the array to get x
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            // if x > x+1 swap using temp
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return console.log(arr);
}

//function to run.
bubbleSort(cba);