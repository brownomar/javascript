
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

function playGame() {
   //disable play button and enable reset button
   document.getElementById("play").disabled = true;
   document.getElementById("reset").disabled = false;
   //display first question
   displayQuestion();
