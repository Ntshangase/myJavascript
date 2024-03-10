

//function to output random numbers from 1-3.
function shakesHand(side){
    const abc = ["Rock","Paper","Scissors"]
    let x = Math.floor(Math.random() * 3);
    //console.log(side); side arrives here correct
    //side = "left"
    document.getElementById("left").innerHTML = `${abc[x]}`
    console.log(abc[x]);
}

function score(player1, player2){
    //define who wins each round

    
    if(player1 === "Rock"){ //rock > scissor
        switch(abc[x]) {
            case  "Scissor" :
                console.log("player1 wins, Rocks crushes scissors.")
            case  "Paper" :
                console.log("player2 wins, Paper covers Rock.");
                break;
            case  "Rock":
                console.log("Player1 + Player2 are both Rocks it's a draw.");
                break;
        }

    }else if(player1 === "Paper") { //Scissors beat paper 
        switch(abc[x]) {
            case  "Scissor" :
                console.log("player2 wins, Scissors cuts Paper.")
            case  "Paper" :
                console.log("draw, player1 + Player2 are both papers.");
                break;
            case  "Rock":
                console.log("Player1 wins, Paper cover Rock.");
                break;
        }

    }else if(player1 === "Scissors") {    //Paper beats rock
        switch(abc[x]) {
            case  "Scissor" :
                console.log("draw, Player1 + Player2 are both Scissors.")
            case  "Paper" :
                console.log("player1 wins, Scissors cuts Paper");
                break;
            case  "Rock":
                console.log("Player2 wins, Rock crushes Scissors.");
                break;
        }

    } else { console.log("The value of player1 is undefiened."); } // else draw.
    
    
    
}