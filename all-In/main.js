

//function to output random numbers from 1-3.
function shakesHand(side){
    const abc = ["Rock","Paper","Scissors"]
    let x = Math.floor(Math.random() * 3);
    //console.log(side); side arrives here correct
    //side = "left"
    document.getElementById("left").innerHTML = `${abc[x]}`
    console.log(abc[x]);
}