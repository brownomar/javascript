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
        //fade slogan out fast/swing
        $('#slogan').fadeOut("fast", "swing", function(){
        //change text back to original slow/linear
        $('#slogan').text("The Power of Flowers").fadeIn("slow", "linear");
        });
    });
    
    //start rose at 100px at 1 opacity
    $('#rose').css({right: '-100px', opacity: 0});
    //fade slide in swing over 2 seconds
    $('#rose').animate({right: '20px', opacity: 1}, 2000, "swing");

    //event handler for form submission
    $('#newsSignup').submit(function(event){
        alert("Thank you for registering");
        $('#newsSignup').hide();
        $('#signuplink').fadeTo("slow", 0.3);
        //stop default submit action
        event.preventDefault();
    });
});