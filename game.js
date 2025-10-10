
//play button starts the game
document.getElementById("play").addEventListener("click", playGame);
document.getElementById("reset").addEventListener("click", resetGame);

// Question Multi-dimensional array
var questions = [
   ["What is the capital of India", "A. Bollywood", "B. Ghandi", "C. New Delhi"],
   ["How many colors are in a rainbow?", "A. 4", "B. 20", "C. 7"],
   ["What is the hardest natural substance on Earth?", "A. Water", "B. Plastic", "C. Diamond"]
];

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
var gameOver = false;

function playGame() {
   if (gameOver) {
      displayScore();
      resetGame();
   }
   displayQuestion();
   gameOver = false;
   document.getElementById("prompt").innerHTML = "";
   document.getElementById("play").disabled = true;
   document.getElementById("reset").disabled = false;
}
function resetGame() {
   currentQuestion = 0;
   score = 0;
   gameOver = false;
   document.getElementById("question").innerHTML = "Click the Play Game button to play our game.";
   document.getElementById("answers").innerHTML = "";
   document.getElementById("prompt").innerHTML = "";
   document.getElementById("play").disabled = false;
   document.getElementById("reset").disabled = true;
}  
// Display the current question and answers
function displayQuestion() {
   if (currentQuestion < totalQuestions) {
      var q = questions[currentQuestion];
      document.getElementById("question").innerHTML = q[0];
      var answersList = document.getElementById("answers");
      answersList.innerHTML = "";
      for (var i = 1; i < q.length; i++) {
         var li = document.createElement("li");
         li.innerHTML = q[i];
         li.addEventListener("click", checkAnswer);
         answersList.appendChild(li);
      }
   } else {
      gameOver = true;
      displayScore();
      document.getElementById("play").innerHTML = "Play Again";
      document.getElementById("play").disabled = false;
      document.getElementById("reset").disabled = true;
   }
}
// Check the selected answer
function checkAnswer(event) {
   var selectedAnswer = event.target.innerHTML;
   var correctAnswers = ["C. New Delhi", "C. 7", "C. Diamond"];
   if (selectedAnswer === correctAnswers[currentQuestion]) {
      score++;
      document.getElementById("prompt").innerHTML = "Correct!";
   } else {
      document.getElementById("prompt").innerHTML = "Wrong! The correct answer was: " + correctAnswers[currentQuestion];
   }
   currentQuestion++;
   displayQuestion();
}
// Display the final score
function displayScore() {
   document.getElementById("question").innerHTML = "Game Over! Your score is " + score + " out of " + totalQuestions + ".";
   document.getElementById("answers").innerHTML = "";
   document.getElementById("prompt").innerHTML = "Click 'Play Again' to try again.";
}
// End of game.js