//question Array
var questionArray = ["What is the answer to question 1?", "What is the answer to question 2?", "What is the answer to question 3?"];
//answer Array
var answerArray = ["Answer 1", "Answer 2", "Answer 3"];

//score Variable
let userScore = 0;

//user answer attempt counter variable
let tryCount = 4;

//counter for answer attempts
function tryCounter () {
    tryCount=tryCount - 1;
    alert ("You now have "+tryCount+" more tries.");
    return tryCount;
}

//game over if tries exceeded
function tryExceeded () {
    if (tryCount < 1){
        alert("You have exceeded the number of failed attempts. Your score is "+userScore+". Game over.");
        document.write("Oof! Better luck next time!<br>");
        //end game
        x = questionArray.length;
        return x;
    }
    }


//compare user answer to correct answer
function checkAnswer (userAnswer) {
    if (userAnswer.toLowerCase() === answerArray[x].toLowerCase()) {
        // if they got it correct 
        document.write("On question "+x+", you answered <strong>\'"+ userAnswer+"\'</strong>, which was correct!<br>");
        //give them a point
        userScore ++;
        alert ("That is correct! You get 1 point! You have "+userScore+" points.");
    }
    else { 
        //decrement try counter
        tryCounter (tryCount);
        //communicate status of game
        document.write("On question "+x+", you answered <strong>\'" + userAnswer + "\'</strong> which was wrong.<br>");
        //negate loop increment
        x--;
        return x;
    }
}
//display questions and answers
document.write("<h3>Here are the questions and answers:</h3><br>");
for (let i=0; i<questionArray.length; i++) {
    document.write("Question "+(i+1)+": "+questionArray[i]+"<br>");
    document.write("Answer: "+answerArray[i]+"<br>");
}

// user's activity log
document.write("<h3>Your Quiz Results:</h3><br>");


//loop counter variable
let x = 0;

//main quiz loop
while (x < questionArray.length) {
    // Q&A time
    let userAnswer = prompt(questionArray[x]);
    //check question against answer
    checkAnswer (userAnswer, x);
    //increment loop counter
    x++;
    
    //check if try limit exceeded
    tryExceeded (tryCount, userScore, questionArray);
    
    console.log(x);
    }
//final score display
document.write("Your final score is "+userScore+" out of "+questionArray.length+".<br><br> Refresh to go again!<br>");