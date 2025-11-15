//wait for load
$(document).ready(function(){
//variable for image name
var displayImg = '';
//pointer
$('img').css('cursor', 'pointer');
//hover effect
$('#thumbs').mouseover(function(event) {
    //add thin dark green border on hovear
    $(this).css('border', '2px solid darkgreen');
    $(this).css('box-shadow', '5px 5px 5px gray');
    }).mouseout(function() {
        $(this).css('border', 'none');
        $(this).css('box-shadow', 'none');
        
    });

//click each smaller image to change larger image
$('#thumbs img').click(function() {
    //getr src of clicked thumb
    displayImg = $(this).attr('src');
    //set src to large image
    $('#lgPic').attr('src', displayImg);
});

//click large image to open in the image in new window
$('#lgPic').click(function() {
    window.open($(this).attr('src'), '_blank');
});

});