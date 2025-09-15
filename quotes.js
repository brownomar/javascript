/*create array with five quotes*/
let fiveQuotes = ["Like a ten-speed bike, most of us have gears we do not use.", "When spiderwebs unite, they can tie up a lion.","Reading is to the mind what exercise is to the body.", "You can't win unless you know how to lose.", "You cannot shake hands with a clenched fist."];
/*prompt user for a number between 1 and 5*/
let userNumber = prompt("Enter a number between 1 and 5");
let remainIndex = userNumber % 5;
/*select quote based on user number*/
let quote = fiveQuotes[remainIndex];
/*write the quote to the screen*/
document.write(quote);


/*array of three website URLs*/
let threeUrls = ["<a href=\"https://www.google.com\">Google</a>", "<a href=\"https://www.facebook.com\">Facebook</a>", "<a href=\"https://www.twitter.com\">Twitter</a>"];

/*write revised array to screen*/
document.write("<br>" + threeUrls);

/*remove first website from array*/
threeUrls.pop();

/*prompt for user's favorite website*/
let userFav = prompt ("Please enter your favorite website");

/*add user's favorite website to the end of the array*/
threeUrls.push(userFav);

/*test array for output in console*/
console.log(threeUrls);

/*write revised array to screen*/
document.write("<br>" + threeUrls);
