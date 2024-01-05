// Get user's choice

var userChoice = prompt("Rock, Paper or Scissors?");

if (userChoice === null){
    console.log("You don't want to play :(")
}

else{
    var userChoice = userChoice.toLowerCase()
    console.log("User = ", userChoice)
}

// get bot choice
const options = ["rock", "paper", "scissors"];
var random = Math.floor(Math.random() * options.length);
var botChoice = options[random]

console.log("Bot = ", botChoice)