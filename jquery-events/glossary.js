//page load function
$(document).ready(function() {
    //hide bonanic names until flower id is clicked
    $(".botanic").hide();
    //first hide any displayed botanic names when flower id is clicked and change pointer to hand
    $(".flower").click(function() {
        $(".botanic").hide();
        $(this).css("cursor", "pointer");
    });
    //display botanic names when flower id is clicked
    $(".flower").click(function() {
        $(this).children(".botanic").show();
    });
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
    

});