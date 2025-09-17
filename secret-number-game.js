let secretNumber = 4;
let guessNumber = 0
let userScore = 0;
// Loop until the user guesses the correct number
while (guessNumber != secretNumber) {
    let guessNumber = prompt("Guess my favorite number between 1 and 5. Make sure its a number 1 - 5!" );
if (guessNumber < 1 || guessNumber > 5 || isNaN(guessNumber)) {
    alert("Please enter a valid number between 1 and 5.");
    document.write("You guessed: " + guessNumber + " ...which was wrong.<br>");
    continue; // Prompt the user again
    }
    else if (guessNumber == secretNumber) {
        let userScore = userScore + 10;
        document.write("Congratulations! The secret number was: " + secretNumber + "!<br>");
        document.write("Your final score is: " + userScore + " points.<br> Game Over, Man!");
        break; // Exit the loop if the guess is correct
    }
}