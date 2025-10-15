// buttons and event listeners to start and reset game
document.getElementById("play").addEventListener("click", playGame);
document.getElementById("reset").addEventListener("click", resetGame);
document.getElementById("reset").disabled = true;

//multi dimensional questions and answers array
var questions = [
   ["What is the capital of India?", 4, "A. Bollywood", "B. Ghandi", "C. New Delhi"],
   ["How many colors are in a rainbow?", 4, "A. 4", "B. 20", "C. 7"],
   ["What is the hardest natural substance on Earth?", 4, "A. Water", "B. Plastic", "C. Diamond"]
];

//initialize variables
var currentQuestion = 0;
var questionCount = 0;
var score = 0;
var totalQuestions = questions.length;
var gameOver = false;

//reset game function
function resetGame() {
    currentQuestion = 0;
    questionCount = 0;
    score = 0;
    gameOver = false;
    //reset array
    questions = [
       ["What is the capital of India?", 4, "A. Bollywood", "B. Ghandi", "C. New Delhi"],
       ["How many colors are in a rainbow?", 4, "A. 4", "B. 20", "C. 7"],
       ["What is the hardest natural substance on Earth?", 4, "A. Water", "B. Plastic", "C. Diamond"]
    ];
    //clear display areas
    document.getElementById("prompt").innerHTML = "";
    document.getElementById("question").innerHTML = "Click the Play Game button to play our game.";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("play").disabled = false;
    document.getElementById("reset").disabled = true;
}

//function to check the answer
function checkAnswer(event) {
   var selectedAnswer = event.target.innerHTML.trim();
    var correctAnswerIndex = questions[currentQuestion][1];
    var correctAnswer = questions[currentQuestion][correctAnswerIndex].trim();
    console.log("Selected Answer: " + selectedAnswer);
    console.log("Correct Answer: " + correctAnswer);
    //result of choice
    var feedbackMessage = "";
    //check if answer is correct
    if (selectedAnswer === correctAnswer) {
        score++;
        feedbackMessage = "Correct!";
        document.getElementById("prompt").innerHTML = feedbackMessage;
        console.log("Score: " + score);
    }
    else {
        feedbackMessage = "Incorrect. ";
        document.getElementById("prompt").innerHTML = "Sorry, the correct answer was: " + correctAnswer;
        console.log("Score: " + score);
    }
    //shift current question from array and move to next question
    questions.shift();
    console.log("Questions left: " + questions.length);
    console.log("Current Question: " + currentQuestion);
    console.log("Question Count: " + questionCount);
    console.log("Total Questions: " + totalQuestions);

    //check if game is over
    if (questions.length === 0) {
        gameOver = true;
    }
    if (gameOver) {
        document.getElementById("question").innerHTML = "Game Over! You scored " + score + " out of " + totalQuestions + ".<br><strong>Click the Reset button to restart the game.</strong>";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("play").disabled = true;
        document.getElementById("reset").disabled = false;
    }
    else {
        displayQuestion();
    }
}

//function to display question and possible answers
function displayQuestion() {
   //check if there are more questions
   if (questions.length > 0) {
        //display question from questions array for current question
        document.getElementById("question").innerHTML = ("Question "+ questionCount+". " + questions[0][0]);
        //display possible answers from questions array for current question
        var answersList = document.getElementById("answers");
        answersList.innerHTML = "";
        for (var i = 2; i < questions[0].length; i++) {
            var listItem = document.createElement("li");
            listItem.innerHTML = questions[0][i];
            listItem.addEventListener("click", checkAnswer);
            //add mouseover pointer style to list items
            listItem.style.cursor = "pointer";
            //hover effect for list items
            listItem.addEventListener("mouseover", function() {
                this.style.backgroundColor = "#f0f0f0";
            });
            listItem.addEventListener("mouseout", function() {
                this.style.backgroundColor = "";
            });
            //append list item to answers list
            answersList.appendChild(listItem);
        }
        questionCount++;
   }
}

//function to start the game
function playGame() {
    //disable play button and enable reset button
    document.getElementById("play").disabled = true;
    document.getElementById("reset").disabled = false;
    document.getElementById("prompt").innerHTML = "Question "+questionCount+" of " + totalQuestions;
    currentQuestion = 0;
    questionCount = 1;
    score = 0;
    gameOver = false;
    //clear previous messages
    document.getElementById("prompt").innerHTML = "";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("question").innerHTML = "";
    //display first question
    displayQuestion();
}