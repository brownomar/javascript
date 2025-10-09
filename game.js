
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