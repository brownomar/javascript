let secretNumber = 4;
let userScore = 0;

// Input validation to ensure user enters a number between 1 and 5

let guessNumber = prompt("Guess a number between 1 and 5. Make sure its a number between 1 and 5!" );
if (guessNumber < 1 || guessNumber > 5 || isNaN(guessNumber)) {
    alert("Nope. Try again. Please enter a number between 1 and 5.");
    guessNumber = prompt("Guess a number between 1 and 5. Make sure its a number between 1 and 5!" );
}else {
    alert("Thanks for entering a valid number. Let's see if you guessed the secret number!");
}
document.write("Your guess: " + guessNumber + "<br>");

let x=1;

// Main game loop - continues until userScore reaches 10
while (x < 10) {
if (Number(guessNumber) === secretNumber) {
    alert("Congratulations! You guessed the secret number!");
    userScore += 10;
    alert("Your score is: " + userScore+" points. You win!");
} else {
    alert("Sorry, that was not the secret number. Try again!");
    x++;
    guessNumber = prompt("Guess a number between 1 and 5. Make sure its a number between 1 and 5!" );
}
}
document.write("The secret number was: " + secretNumber + "<br>");
document.write("Your final score is: " + userScore + " points.<br>");