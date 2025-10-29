//page load function
$(document).ready(function() {
    //hide botanic names on page load
    $(".botanic").hide();
    //hide the imgdivs on page load
    $(".imgdiv").hide();
    //mouseover and mouseout to show/hide images for pic spans
    //get attribute and concatenate # with alt attribute value
    var imgID = "#" + $(this).attr("alt");
    //put x y coordinates of event in variable
    $(".pic").mouseover(function(event) {
        var x = event.pageX + 150;
        var y = event.pageY;
        //set css position of imgdivs to x and y coordinates
        $(imgID).css({top: y + "px", left: x + "px"});
        //show the imgdiv
        $(imgID).show();
    });
    $(".pic").mouseout(function() {
        //hide the imgdiv
        $(imgID).hide();
    });
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