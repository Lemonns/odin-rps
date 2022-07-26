const choices = ["rock", "paper", "scissors"];

function random_choice(options) {
    let num = Math.floor(Math.random() * options.length);
    return options[num];
}


function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return console.log('Tie');
    }
    if (playerChoice === "rock") {
        if (computerChoice == "paper") {
          return console.log("Computer Won!");
        }
        else {
            return console.log("You won!");
        }
    }
    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return console.log("Computer won!");
        }
        else {
            return console.log("You won!");
        }
    }
    if (playerChoice === "scissors") {
        if (computerChoice == "rock") {
            return console.log("Computer won!");
        }
        else {
            return console.log("You won!");
            
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("rock, paper or scissors").toLowerCase();
        playRound(playerChoice, random_choice(choices));
    }
}

game()
