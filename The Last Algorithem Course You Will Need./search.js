
// node --experimental-modules search.js

//tsting
let Stack = [1,2,3,4,5,6,7,8,9];
let girl = "I love you jesus"
function test(arr,num){
    for(let i=0; i<arr.length;i++){
        console.log(arr[i]);
    }
    console.log(num)
    
}

//linear sear
function linear_search(){
    const Array = [1,2,3,4];
    const number = 3;

    for (let i=0; i<Array.length; i++){
        if (Array[i] === number){
            console.log("true"); // not good practise to return inside Loop
        }
    }
}

// Binary search.
let Array = [1,2,3,4,5,6,7,8,9]
function binarySearch(){}



//function to run.
test(Stack,girl);