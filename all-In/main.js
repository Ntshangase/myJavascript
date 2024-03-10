

//function to output random numbers from 1-3.
function shakesHand(side){
    const abc = ["Rock","Paper","Scissors"]
    let x = Math.floor(Math.random() * 3);
   
    document.getElementById(side).textContent = `${abc[x]}`;
}

function revealWinner(){
    //define who wins each round

    let player1 =  document.getElementById("left").textContent;
    let player2 =  document.getElementById("right").textContent;
    
    if(player1 === "Rock"){     //leftPlayer is ROck
        switch(player2) {
            case  "Scissors" :
                console.log("player1 wins, Rock crushes Scissors.");
                break;
            case  "Paper" :
                console.log("player2 wins, Paper covers Rock.");
                break;
            case  "Rock":
                console.log("Player1 + Player2 are both Rock it's a draw.");
                break;
        }

    }else if(player1 === "Paper") {     //leftPlayer is Paper
        switch(player2) {
            case  "Scissors" :
                console.log("player2 wins, Scissors cuts Paper.");
                break;
            case  "Paper" :
                console.log("draw, player1 + Player2 are both Paper.");
                break;
            case  "Rock":
                console.log("Player1 wins, Paper cover Rock.");
                break;
        }

    }else if(player1 === "Scissors") {      //leftPlayer is Scissors
        switch(player2) {
            case  "Scissors" :
                console.log("draw, Player1 + Player2 are both Scissors.")
                break;
            case  "Paper" :
                console.log("player1 wins, Scissors cuts Paper");
                break;
            case  "Rock":
                console.log("Player2 wins, Rock crushes Scissors.");
                break;
        }

    } else { console.log("The value of player1 is undefiened."); } // else draw.
    
    
    
}