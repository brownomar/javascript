//page load function
$(document).ready(function() {
    //mouseover and mouseout changes h1 and h2 colors
    $("h1").mouseover(function() {
        $(this).css("color", "red");
    });
    $("h1").mouseout(function() {
        $(this).css("color", "black");
    });
    $("h2").mouseover(function() {
        $(this).css("color", "blue");
    });
    $("h2").mouseout(function() {
        $(this).css("color", "black");
    });
    //hide bonanic names until flower id is clicked
    $(".botanic").hide();
    $(".flower").click(function() {
        $(this).next(".botanic").toggle();
    });

});