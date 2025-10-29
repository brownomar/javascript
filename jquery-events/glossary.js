//page load function
$(document).ready(function() {
    //hovering over flower names changes cursor to pointer
    $(".flower").css("cursor", "pointer");
    //hide any displayed botanic names when flower clicked
    $(".flower").click(function() {
        $(".botanic").hide();
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