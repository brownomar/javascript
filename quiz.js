let question1 = "What is the answer to question 1?";
let question2 = "What is the answer to question 2?";
let question3 = "What is the answer to question 3?";
let question4 = "What is the answer to question 4?";
let answer1 = "Answer 1";
let answer2 = "Answer 2";
let answer3 = "Answer 3";
let answer4 = "Answer 4";

var questionArray = [question1, question2, question3, question4];
var answerArray = [answer1, answer2, answer3, answer4];

for (let x = 0; x < questionArray.length; x++) {
	// Q&A time
    let userAnswer = prompt(questionArray[x]).toLowerCase();
    if (userAnswer === answerArray[x]) {
        alert ("That is correct!");
    }
    else {
        alert ("No. Try again.");
        x-=1;
    }

}