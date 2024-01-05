// Get user's choice

var userChoice = prompt("Rock, Paper or Scissors?");

if (userChoice === null){
    console.log("You don't want to play :(")
}

else{
    var userChoice = userChoice.toLowerCase()
    console.log("User = ", userChoice)
}



