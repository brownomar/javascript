//wait for dom to finish loading
$(document).ready(function()
{
    console.log("About page loaded and ready!");
//now we can select elements and add functionality
    //like hiding buttons (we'll hide the show button initially)
    $("#showButton").hide();

    //element visibility toggle
    $("#hideButton").click(function(){
        $("#textToHide").hide();
    });

    $("#showButton").click(function(){
        $("#textToHide").show();
    });

//hide hide button or show button depending on text visibility
    $("#hideButton").click(function(){
        $("#hideButton").hide();
        $("#showButton").show();
    });

    $("#showButton").click(function(){
        $("#showButton").hide();
        $("#hideButton").show();
    });
//event text change on button click
    $("#eventButton2").hide();
    $("#eventButton").click(function(){
        $("#eventText").text("The button was clicked! Double Click to change it back!");
        $("#eventButton").hide();
        $("#eventButton2").show();
    });
    //change it back on another click
    $("#eventButton2").dblclick(function(){
        $("#eventText").text("This text will change when you click the button above.");
        $("#eventButton2").hide();
        $("#eventButton").show();
    });
    //slow transition example
    $("#showTextButton").hide();
    $("#eventText").hover(function(){
        $("#eventButton").hide();
        $("#eventButton2").hide();
        $("#showTextButton").show();
        $("#eventText").fadeOut("slow)");
        $("#eventText2").fadOut("slow");
        
    });
    $("#showTextButton").click(function(){
        $("#eventText").show();
        $("#showTextButton").fadeOut("slow");
        $("#eventButton").show();
    });

    //thumbnail image hover enlarge
    $("#thumbspan").hover(function(){
        $(this).css({"cursor":"pointer","transform":"scale(1.5)","transition":"transform 0.5s ease"});
    }, function(){
        $(this).css({"transform":"scale(1)","transition":"transform 0.5s ease"});
    });
    //click to open in new window
    $("#thumbspan").click(function(){
        window.open($(this).find("img").attr("src"), "_blank");
    });
});