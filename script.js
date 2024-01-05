// Determine who won
// Paper > Rock
// Rock > Scissors
// Scissors > Paper

function playRound(userChoice, botChoice) {

    console.log("You chose", userChoice);
    console.log("The Bot chose", botChoice);

    if (botChoice === "paper" && userChoice === "rock") {
        console.log("You lose! Paper beats Rock!");
        return "lost"
    }
    else if (botChoice === "rock" && userChoice === "scissors") {
        console.log("You lose! Rock beats Scissors!");
        return "lost"
    }
    else if (botChoice === "scissors" && userChoice === "paper") {
        console.log("You lose! Scissors beats Paper!");
        return "lost"
    }

    else if (botChoice === userChoice) {
        console.log("It's a draw!");

        // another round
        //var userChoice = prompt("Rock, Paper or Scissors?");
        var userChoice = "rock";

        if (userChoice === null) {
            console.log("I guess you lose!");
            return "lost"
        }

        else {
            var botChoice = getComputerChoice();
            return playRound(userChoice, botChoice); // recursion
        }
    }

    else {
        console.log(`You win! ${userChoice} beats ${botChoice}!`);
        return "won"
    }
}

// get bot choice
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    var random = Math.floor(Math.random() * options.length);
    var botChoice = options[random];
    return botChoice;
}

// Game

function game() {
    var i = 1;
    var userScore = 0;
    var botScore = 0;

    while (i <= 5) {
        console.log(`Round ${i}!`);
        var botChoice = getComputerChoice();
        //var userChoice = prompt("Rock, Paper or Scissors?");
        var userChoice = "rock";
        var result = playRound(userChoice, botChoice);

        if (result === "won") {
            userScore = userScore + 1;
        }

        else if (result === "lost") {
            botScore = botScore + 1;
        }

        console.log(`Your score is ${userScore}`);
        console.log(`The Bot's score is ${botScore}`);
        i++;
    }

    if (userScore > botScore) {
        console.log("The winner is...YOU!")
    }
    else if (botScore > userScore) {
        console.log("The winner is...THE BOT")
    }
    else{
        console.log("It's a draw!")
    }

}

// Get user's choice

var userChoice = "scissors";

if (userChoice === null) {
    console.log("You don't want to play :(");
}

else {
    // Play the game
    var userChoice = userChoice.toLowerCase();
    game();
}