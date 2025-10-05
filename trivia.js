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
    case (hours>=18):
        timeOfDay = "evening";
        break; 
    default:
        timeOfDay = "day";
}

document.write("Good "+timeOfDay+". Today is " + days[dayOfWeek] + ", " + months[month] + " " + day + ", " + year + ".<br>");

//question Array
let fiveQuotes = ["Like a ten-speed bike, most of us have gears we do not use.", "When spiderwebs unite, they can tie up a lion.","Reading is to the mind what exercise is to the body.", "You can't win unless you know how to lose.", "You cannot shake hands with a clenched fist."];
let dailyQuote = fiveQuotes[Math.floor(Math.random()*4)];

document.write("Here is your quote for the day: " + dailyQuote + "<br>");

//function to change background color
function changeBackground(color) {
    document.body.style.background = color;
}