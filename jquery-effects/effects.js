// to show/hide newsSignup form
$(document).ready(function(){
    //hide form at startup
    $("#newsSignup").hide();
    //click linke and toggle form
    $("#signuplink").click(function(event){
        //prevent default action of the link
        event.preventDefault();
        //open and close form with +/-
        var signuplink = $("#openclose").text();
        //toggle + and -
        if (signuplink === "+") {
            $("#openclose").text("-");
        } else {
            $("#openclose").text("+");
        }
  });
});