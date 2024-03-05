
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

//function to run.
binarySearch(abc,2);