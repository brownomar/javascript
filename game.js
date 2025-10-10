
//play button starts the game
document.getElementById("play").addEventListener("click", playGame);
document.getElementById("reset").addEventListener("click", resetGame);

// Question Multi-dimensional array
var questions = [
   ["What is the capital of India", 4, "A. Bollywood", "B. Ghandi", "C. New Delhi"],
   ["How many colors are in a rainbow?", 4, "A. 4", "B. 20", "C. 7"],
   ["What is the hardest natural substance on Earth?", 4, "A. Water", "B. Plastic", "C. Diamond"]
];
//initialize variables
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
var gameOver = false;
//correct answer is the second element in each question array
correctAnswerIndex = 1;

//make sure reset button is disabled when page first loads
document.getElementById("reset").disabled = true;

//function to display question and possible answers
function displayQuestion() {
   //check if there are more questions
   if (currentQuestion < totalQuestions) {
      //display question
      document.getElementById("question").innerHTML = questions[currentQuestion][0];
      //display possible answers
      var answersList = document.getElementById("answers");
      answersList.innerHTML = "";
   }
}


//function to check the answer
function checkAnswer(event, correctAnswerIndex) {
   var selectedAnswer = event.target.innerHTML;
   var correctAnswer = questions[currentQuestion][correctAnswerIndex];
   if (selectedAnswer === correctAnswer) {
      score++;
      document.getElementById("prompt").innerHTML = "Correct!";
   }
   else {
      document.getElementById("prompt").innerHTML = "Sorry, the correct answer is: " + correctAnswer;
   }
   currentQuestion++;
   //check if game is over
   if (currentQuestion >= totalQuestions) {
      gameOver = true;
      endGame();
   }
   else {
      displayQuestion();
      //add event listeners to answer choices
      var answersList = document.getElementById("answers");
      answersList.innerHTML = "";
      for (var i = 2; i < questions[currentQuestion].length; i++) {
         var listItem = document.createElement("li");
         listItem.innerHTML = questions[currentQuestion][i];
         listItem.addEventListener("click", checkAnswer);
         answersList.appendChild(listItem);
      }
      //clear prompt
      document.getElementById("prompt").innerHTML = "";
   }
}

//function to end the game
function endGame() {
   document.getElementById("question").innerHTML = "Game Over! Your score is " + score + " out of " + totalQuestions + ".";
   document.getElementById("answers").innerHTML = "";
   document.getElementById("prompt").innerHTML = "Click the Reset Game button to play again.";
   //disable play button and enable reset button
   document.getElementById("play").disabled = true;
   document.getElementById("reset").disabled = false;
}

//function to reset the game
function resetGame() {
   currentQuestion = 0;
   score = 0;
   gameOver = false;
   document.getElementById("question").innerHTML = "Click the Play Game button to play our game.";
   document.getElementById("answers").innerHTML = "";
   document.getElementById("prompt").innerHTML = "";

   //enable play button and disable reset button
   document.getElementById("play").disabled = false;
   document.getElementById("reset").disabled = true;
}
//end of game.js

//function to play the game
function playGame() {
   //disable play button once game starts and enable reset button
   document.getElementById("play").disabled = true;
   document.getElementById("reset").disabled = false;
   displayQuestion();
   //add event listeners to answer choices
   var answersList = document.getElementById("answers");
   for (var i = 2; i < questions[currentQuestion].length; i++) {
      var listItem = document.createElement("li");
      listItem.innerHTML = questions[currentQuestion][i];
      listItem.addEventListener("click", checkAnswer);
      answersList.appendChild(listItem);
   }
   //clear prompt
   document.getElementById("prompt").innerHTML = "";
}
