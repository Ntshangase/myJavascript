

//function to output random numbers from 1-3.
function shakesHand(side){
    const abc = ["Rock","Paper","Scissors"]
    let x = Math.floor(Math.random() * 3);
   
    document.getElementById(side).textContent = `${abc[x]}`;
}

function revealWinner(){
    //define who wins each round

    const player1 =  document.getElementById("left").textContent;
    const player2 =  document.getElementById("right").textContent;
    //console.log(player1)
    
    if(player1 === "Rock"){     //leftPlayer is ROck
        switch(player2) {
            case  "Scissor" :
                console.log("player1 wins, Rocks crushes scissors.")
            case  "Paper" :
                console.log("player2 wins, Paper covers Rock.");
                break;
            case  "Rock":
                console.log("Player1 + Player2 are both Rocks it's a draw.");
                break;
        }

    }else if(player1 === "Paper") {     //leftPlayer is Paper
        switch(player2) {
            case  "Scissor" :
                console.log("player2 wins, Scissors cuts Paper.")
            case  "Paper" :
                console.log("draw, player1 + Player2 are both papers.");
                break;
            case  "Rock":
                console.log("Player1 wins, Paper cover Rock.");
                break;
        }

    }else if(player1 === "Scissors") {      //leftPlayer is Scissors
        switch(player2) {
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