let question1 = "What is the answer to question 1?";
let question2 = "What is the answer to question 2?";
let question3 = "What is the answer to question 3?";
let answer1 = "Answer 1";
let answer2 = "Answer 2";
let answer3 = "Answer 3";
let userScore = 0;
let x = 0;
let tryCount = 4;
var questionArray = [question1, question2, question3];
var answerArray = [answer1, answer2, answer3];

//counter for answer attempts
function tryCounter () {
    tryCount=tryCount - 1;
    return tryCount;
}

//game over if tries exceeded
function tryExceeded () {
    if (tryCount < 1){
        alert("You have exceeded the number of failed attempts. Your score is "+userScore+". Game over.");
    }
    else {
        return;
    }
}

//quiz loop
while (x < questionArray.length) {
    // Q&A time
    let userAnswer = prompt(questionArray[x]);
    //check question against answer
    if (userAnswer.toLowerCase() === answerArray[x].toLowerCase()) {
        // if they got it correct 
        document.write("You answered <strong>\'"+ userAnswer+"\'</strong>, which was correct!<br>");
        alert ("That is correct! You get 1 point! You have "+userScore+" points.");
        //give them a point
        userScore ++;
        //leave trys at 3
        x++; // increment to move to next question
    }
    else { 
        //decrement try counter
        tryCounter (tryCount);
        //check for game over
        tryExceeded (tryCount, userScore);
        //communicate status of game
        document.write("You answered <strong>\'" + userAnswer + "\'</strong> which was wrong.<br>");
        alert ("No. You have "+tryCount+" more tries.");
    }
}