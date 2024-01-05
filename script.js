// Get user's choice

var userChoice = prompt("Rock, Paper or Scissors?");

if (userChoice === null) {
    console.log("You don't want to play :(");
}

else {
    var userChoice = userChoice.toLowerCase();
    console.log("You chose", userChoice);

    // get bot choice
    const options = ["rock", "paper", "scissors"];
    var random = Math.floor(Math.random() * options.length);
    var botChoice = options[random];

    console.log("The Bot chose", botChoice);

    // Determine who won
    // Paper > Rock
    // Rock > Scissors
    // Scissors > Paper

    if (botChoice === "paper" && userChoice === "rock") {
        console.log("You lose!");
    }
    else if (botChoice === "rock" && userChoice === "scissors") {
        console.log("You lose!");
    }
    else if (botChoice === "scissors" && userChoice === "paper") {
        console.log("You lose!");
    }

    else if (botChoice === userChoice) {
        console.log("It's a draw!")
    }

    else {
        console.log("You win!");
    }
}