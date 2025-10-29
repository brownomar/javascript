//page load function
$(document).ready(function() {
    //mouseover and mouseout changes heading color
    $("dt").mouseover(function() {
        $(this).css("color", "blue");
    });
    $("dt").mouseout(function() {
        $(this).css("color", "black");
    });
    //hide botanic names and display individual ones when flower clicked
    $("dd").hide();
    $("dt").click(function() {
        $(this).next("dd").toggle();
    });
    //hover displays images for select flowers beside flower name/ hides on mouseout
    $("#rose").hover(
        function() {
            $("#roseImg").show();
        },
        function() {
            $("#roseImg").hide();
        }
    );
    //keypress moves to first flower fore ah letter when letter key pressed
    $(document).keypress(function(event) {
        var key = String.fromCharCode(event.which).toLowerCase();
        $("dt").each(function() {
            if ($(this).text().charAt(0).toLowerCase() === key) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top
                }, 500);
                return false; // exit each loop
            }
        });
    });

});