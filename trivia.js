
//FUNCTIONS
function getCurrentDate(){
//array for month and day names
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var year = date.getFullYear();
    var monthName = months[date.getMonth()];
    var day = date.getDate();
    var dayOfWeek = days[date.getDay()];
    var currentDate = dayOfWeek + ", " + monthName + " " + day + ", " + year;
    return currentDate;
}

//function to get time of day
function getTimeOfDay() {
    var now = new Date();
    var hour = now.getHours();
    
//switch for morning afternooon or evening
    var timeOfDay;
    switch (true) {
        case (hour < 12):
            timeOfDay = "morning";
            break;
        case (hour < 18):
            timeOfDay = "afternoon";
            break;
        default:
            timeOfDay = "evening";
            break;
        }
    return timeOfDay;
}

//function to get current time info
function getCurrentTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
 
//calculate morning or evening suffix
    var suffix = "AM";
    if (hour >= 12) {
        suffix = "PM";
        if (hour > 12) {
            hour = hour - 12;
        }
    }
    if (hour === 0) {
        hour = 12;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    var currentTime = hour + ":" + minute + " " + suffix;
    return currentTime;
    

}

//capitalize first letter of user name
function capitalizeUserName () {
    return userName.charAt(0).toUpperCase() + userName.slice(1);
}

//validate email address
function validateEmail(){
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    while (!emailPattern.test(userEmail)) {
    userEmail = prompt("That doesn't seem to be a valid email address. Please enter a valid email address.");
    }
return userEmail;
}

//extract user name from email address
function extractUserName(){
    var sliceHere = userEmail.indexOf("@");
    var extractedName = userEmail.slice(0, sliceHere);
    return extractedName;
}

//extract domain from email address
function extractDomainName(){
    var sliceHere = userEmail.indexOf("@");
    var extractedDomain = userEmail.slice(sliceHere + 1);
    return extractedDomain;
}
//MAIN PROGRAM

//get time of day, current date and time
var timeOfDay = getTimeOfDay();
var currentDate = getCurrentDate();
var currentTime = getCurrentTime();

//display current date
document.write("It is " + currentTime + " on " + currentDate + ".<br>");
//get user name
var userName = prompt("Welcome to the Trivia Quiz! What is your name?");
userName = capitalizeUserName(userName);
//get user email
var userEmail = prompt ("Good " + timeOfDay + ", "+userName+" What is your email address?");
document.write("Good " + timeOfDay + ", "+userName+"!<br><br>");
validateEmail(userEmail);
//display username and domain extracted from email address
var extractedName = extractUserName(userEmail);
var extractedDomain = extractDomainName(userEmail);
document.write("Username: <strong>" + extractedName.toUpperCase() + "</strong><br>");
document.write("Domain: <strong>" + extractedDomain + "</strong><br><br>");


//quote array and selector
let fiveQuotes = ["Like a ten-speed bike, most of us have gears we do not use.", "When spiderwebs unite, they can tie up a lion.","Reading is to the mind what exercise is to the body.", "You can't win unless you know how to lose.", "You cannot shake hands with a clenched fist."];
let dailyQuote = fiveQuotes[Math.floor(Math.random()*4)];
document.write("Here is your quote for the day:<br><strong><em>\"" + dailyQuote + "\"</em></strong><br><br>");


//copied quiz code below

//question Array
var questionArray = ["Which continent has land in all four hemispheres?", "What does the South African concept of \"Ubuntu\" mean?", "What is the largest lake in Africa?"];
//answer Array
var answerArray = ["Africa", "I am, because you are", "Lake Victoria"];

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
    
    //convert answers to lowercase and compare user answer to correct answer
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
    }
    }
    //final score display
    document.write("<h2><strong>Your final score is "+userScore+" out of "+(pointsAwarded.length*answerArray.length)+" points.</strong></h2>")

    //final score percentage format two decimal places
    let scorePercent = (userScore/(pointsAwarded.length*answerArray.length))*100;
    document.write("That's <strong>"+scorePercent.toFixed(2)+"%</strong> correct!<br>");

    document.write("<a href=\"trivia.html\">Refresh</a> to go again!<br>");