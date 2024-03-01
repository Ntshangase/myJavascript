
// node --experimental-modules search.js

//tsting
function test(){
    console.log("It starts with me");
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


//function to run.
linear_search();