// to show/hide newsSignup form
$(document).ready(function(){
    //hide form at page load
    $('#newsSignup').hide();
    //click linke and toggle form
    $('#signuplink').click(function(event){
        //prevent default action of the link
        event.preventDefault();
        //toggle the form
        $('#newsSignup').slideToggle("slow");
        //open and close form with +/-
        var signuplink = $('#openclose').text();
        //toggle + and -
        if (signuplink === "+") {
            $('#openclose').text("-");
        } else {
            $('#openclose').text("+");
        }
    });
    //make mouse cursor a pointer when over slogan
    $('#slogan').css('cursor', 'pointer');
    //mouseover event for slogan element
    $('#slogan').mouseover(function(){
        //fade out slogan element normal/linear
        $('#slogan').fadeOut("normal", "linear", function(){
        //fade to new slogan slow/swing
        $('#slogan').text("Hand Picked Just for You").fadeIn("slow", "swing");
        });
    });

    $('#slogan').mouseout(function(){
        //fade slogan out at fast speed with swing
        $('#slogan').fadeOut("fast", "swing", function(){
        //change text back to original slowly with linear easing
        $('#slogan').text("The Power of Flowers").fadeIn("slow", "linear");
        });
    });
    


});