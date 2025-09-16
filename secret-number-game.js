let secretNumber = 4;
let userScore = 0;
let guessedNumber;

// Input validation to ensure user enters a number between 1 and 5
while (guessNumber < 1 || guessNumber > 5 || isNaN(guessNumber)) {
let guessNumber = prompt("Guess a number between 1 and 5. Make sure its a number between 1 and 5!" );
}

// Main game loop - continues until userScore reaches 10
while (userScore < 10) {
if (Number(guessNumber) === secretNumber) {
    alert("Congratulations! You guessed the secret number!");
    userScore += 10;
    alert("Your score is: " + userScore+" points. You win!");
} else {
    alert("Sorry, that was not the secret number. Try again!");
}
}
document.write("The secret number was: " + secretNumber + "<br>");
document.write("Your final score is: " + userScore + " points.<br>");