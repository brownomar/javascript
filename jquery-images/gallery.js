//wait for load
$(document).ready(function(){
//variable for image name
var displayImg = $('thumbs').mouseover(attr).text;
//hover effect
$('thumbs').mouseover(function(event){
    $('figure').attr('src', displayImg);
    })

});