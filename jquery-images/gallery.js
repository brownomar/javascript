//wait for load
$(document).ready(function(){
//variable for image name
var displayImg = '';
//hover effect
$('#thumbs').mouseover(function(event) {
    //add thin dark green border on hovear
    $(this).css('border', '2px solid darkgreen');
    }).mouseout(function() {
        $(this).css('border', 'none');
        //pointer
        $('img').css('cursor', 'pointer');
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