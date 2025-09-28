//question Array
var questionArray = ["What is the answer to question 1?", "What is the answer to question 2?", "What is the answer to question 3?"];
//answer Array
var answerArray = ["Answer 1", "Answer 2", "Answer 3"];

//score Variable
let userScore = 0;
//points awarded per correct answer variable
let pointsAwarded = [3,2,1];
let y=0;

//user answer attempt counter variable
let tryCount = 3;

//counter for answer attempts
function tryCounter () {
    tryCount=tryCount - 1;
    alert ("You now have "+tryCount+" more tries.");
    y++;
    return tryCount, y;
}

//game over if tries exceeded
function tryExceeded () {
    if (tryCount < 1){
        alert("You have exceeded the number of failed attempts. Your score is "+userScore+". Game over.");
        document.write("<strong>Oof!</strong> Better luck next time!<br>");
        //end game
        x = questionArray.length;
        return x;
    }
    }


//compare user answer to correct answer
function checkAnswer (userAnswer) {
    if (userAnswer.toLowerCase() === answerArray[x].toLowerCase()) {
        // if they got it correct 
        document.write("On question "+(x+1)+", you answered <strong>\'"+ userAnswer+"\'</strong>, which was correct!<br>");
        //give them a point
        userScore = userScore + pointsAwarded[y];
        alert ("That is correct! You get "+pointsAwarded[y]+" point\(s\)! You have "+userScore+" points.");
    }
    else { 
        //decrement try counter
        tryCounter (tryCount, y);
        //communicate status of game
        document.write("On question "+(x+1)+", you answered <strong>\'" + userAnswer + "\'</strong> which was wrong.<br>");
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
    if (tryCount > 0){
        let userAnswer = prompt(questionArray[x]);
    //check question against answer
    checkAnswer (userAnswer, x);
    //increment loop counter
    x++;
    
    //check if try limit exceeded
    tryExceeded (tryCount, userScore, questionArray);
    
    console.log(x);
    }
}
//final score display
document.write("<h2><strong>Your final score is "+userScore+" out of "+(pointsAwarded.length*answerArray.length)+" points.</strong></h2><br><br> Refresh to go again!<br>");