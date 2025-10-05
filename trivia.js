function printToday() {
    var today = new Date();
    document.write("Today's date is " + today.toDateString() + "<br>");
}

//creating a date object
var date = new Date();
var newDate = Date(month, day, year);
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var dayOfWeek = date.getDay();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//switch for morning afternooon or evening
var timeOfDay;
var hours = date.getHours();
switch (hours) {
    case (hours<12):
        timeOfDay = "morning";
        break;
    case (hours>=12):
        timeOfDay = "afternoon";
        break;
    case (hours>=18):
        timeOfDay = "evening";
        break; 
    default:
        timeOfDay = "day";
}

document.write("Good "+timeOfDay+". Today is " + days[dayOfWeek] + ", " + months[month] + " " + day + ", " + year + ".<br>");

//question Array
let fiveQuotes = ["Like a ten-speed bike, most of us have gears we do not use.", "When spiderwebs unite, they can tie up a lion.","Reading is to the mind what exercise is to the body.", "You can't win unless you know how to lose.", "You cannot shake hands with a clenched fist."];
let dailyQuote = fiveQuotes[Math.floor(Math.random()*4)]


//score Variable
let userScore = 0;
//points awarded per correct answer variable
let pointsAwarded = [3,2,1];
let y=0;

//user answer attempt counter variable
let tryCount = 3;

//counter for answer attempts
function tryCounter () {
    tryCount=pointsAwarded[y]-1;
    alert ("You now have "+tryCount+" more tries.");
    y++;
    return tryCount, y;
    }

//game over if tries exceeded
function tryExceeded () {
    if (tryCount < 1){
        alert("You have exceeded the number of failed attempts for that one simple question. Your score is "+userScore+".");
        //go to next question
        x++;
        //reset try counter
        tryCount = 3;
        y=0;     
        return x, tryCount, y;
    }
    }



//display questions and answers
document.write("<h3>Here are the questions and answers:</h3>");
for (let i=0; i<questionArray.length; i++) {
    document.write("Question "+(i+1)+": "+questionArray[i]+"<br>");
    document.write("Answer: "+answerArray[i]+"<br>");
}

// user's activity log
document.write("<h3>Your Quiz Results:</h3>");


//loop counter variable
let x = 0;

//main quiz loop
while (x < questionArray.length) {
    // Q&A time
    if (tryCount > 0){
    let userAnswer = prompt(questionArray[x]);
    
    //compare user answer to correct answer
    if (userAnswer.toLowerCase() === answerArray[x].toLowerCase()) {
        // if they got it correct 
        document.write("On question "+(x+1)+", you answered <strong>\'"+ userAnswer+"\'</strong>, which was correct!<br>");
        //give them a point
        userScore = userScore + pointsAwarded[y];
        alert ("That is correct! You get "+pointsAwarded[y]+" point\(s\)! You have "+userScore+" points.");
        //reset point counter
        y=0;
    }
    else { 
        //decrement try counter
        tryCounter (tryCount, y);
        //communicate status of game
        document.write("On question "+(x+1)+", you answered <strong>\'" + userAnswer + "\'</strong> which was wrong.<br>");
        //negate loop increment to stay on same question
        x--;
    }

    //increment loop counter
    x++;
    
    //check if try limit exceeded
    tryExceeded (tryCount, userScore, questionArray);
    
    console.log(x);
    }
    }
    //final score display
    document.write("<h2><strong>Your final score is "+userScore+" out of "+(pointsAwarded.length*answerArray.length)+" points.</strong></h2><a href=\"quiz.html\">Refresh</a> to go again!<br>");
        
 