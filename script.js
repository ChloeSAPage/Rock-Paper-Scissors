// Determine who won
// Paper > Rock
// Rock > Scissors
// Scissors > Paper

function play(userChoice, botChoice) {

    if (botChoice === "paper" && userChoice === "rock") {
        console.log("You lose! Paper beats Rock!");
    }
    else if (botChoice === "rock" && userChoice === "scissors") {
        console.log("You lose! Rock beats Scissors!");
    }
    else if (botChoice === "scissors" && userChoice === "paper") {
        console.log("You lose! Scissors beats Paper!");
    }

    else if (botChoice === userChoice) {
        console.log("It's a draw!");
        return "draw";
    }

    else {
        console.log(`You win! ${userChoice} beats ${botChoice}!`);
    }
}

// get bot choice
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    var random = Math.floor(Math.random() * options.length);
    var botChoice = options[random];
    console.log("The Bot chose", botChoice);
    return botChoice
}


// Get user's choice

var userChoice = prompt("Rock, Paper or Scissors?");

if (userChoice === null) {
    console.log("You don't want to play :(");
}

else {
    var userChoice = userChoice.toLowerCase();
    console.log("You chose", userChoice);

    var botChoice = getComputerChoice();

    var result = play(userChoice, botChoice);

    if (result === "draw") {
        var userChoice = prompt("Rock, Paper or Scissors?");

        if (userChoice === null) {
            console.log("I guess you lose!");
        }

        else {
            console.log("You chose", userChoice);
            var botChoice = getComputerChoice();
            play(userChoice, botChoice);
        }

    }

}