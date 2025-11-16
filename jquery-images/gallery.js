//wait for load
$(document).ready(function(){
//variable for image name
var displayImg = '';
//pointer
$('img').css('cursor', 'pointer');
//hover effect
$('#thumbs img').mouseover(function(event) {
    //add thin dark green border on hovear
    $(this).css('border', '2px solid darkgreen');
    $(this).css('box-shadow', '5px 5px 5px gray');
    }).mouseout(function() {
        $(this).css('border', 'none');
        $(this).css('box-shadow', 'none');
        
    });

//click each smaller image to change larger image
$('#thumbs img').click(function() {
    //get src of clicked thumb
    displayImg = $(this).attr('src');
    //get new title
    displayTitle = $(this).attr('alt');
    //set src and alt to large image and title
    $('#lgPic').attr('src', displayImg);
    $('#lgTitle').text(displayTitle);
});

//click large image to open in the image in new window
$('#lgPic').click(function() {
    window.open($(this).attr('src'), '_blank');
});

});