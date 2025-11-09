//wait for page to load

$(document).ready(function() {
    //variable to count number of items in cart
    let itemCount = 0;

    //add click event listener to add to cart buttons
    $('.add').on('click', function() {
        
        //create itemcount element in the shopping cart when first item is added
        if (itemCount === 0) {
            $('#cart').prepend("<p>Your Cart (<span id='itemCount'>0</span> items)</p><ul></ul>");
            //hide empty cart message
            $('#empty').hide();
        }
        //increment item count
        itemCount++;

        //get the id of the item to add to cart use id attribute
        const itemID = $(this).attr('id');
        //get the name of the item to add to cart use name attribute
        const itemName = $(this).attr('name');
        //cartLink variable to hold the html for the new cart item
        var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " <span class='del'>Remove</span></li>";
        
        //append list item to end of cart
        $('#cart ul').append(cartLink);
        //update item count in cart display
        $('#itemCount').text(itemCount);
    });
    //delegated event listener for delete buttons
    $('#cart').on('click', '.del', function() {
        //remove the parent li of the clicked delete button
        $(this).parent().remove();
        //decrement item count
        itemCount--;
        //update item count in cart display
        $('#itemCount').text(itemCount);
         //if item count is 0 show empty cart message and remove item count element
        if (itemCount < 1) {
            $('#empty').show();
            $('#cart p').remove();
            $('#cart ul').remove();
        }
    });

    //change staron.gif and staroff.gif on hover
    $('.rating img').hover(function() {
        //get the index of the hovered star
        const index = $(this).index();
        //on mouse click set all stars up to and including the clicked star to staron.gif
        $(this).parent().click(function() {
            $(this).children('img').each(function(i) {
                if (i <= index) {
                    $(this).attr('src', 'staron.gif');
                } else {
                    $(this).attr('src', 'staroff.gif');
                }
            });
        });
        
    });
});