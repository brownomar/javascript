//wait for page to load
$(document).ready(function() {
    //variable to count number of items in cart
    let itemCount = 0;
    //change cursor to pointer for starts and add to cart elements on hover
    $('.rating, .add').css('cursor', 'pointer');
    //variable to hold html for creating a delete button 
    const deleteButtonHTML = '<span class="delete">X</span>';
    //add click event listener to add to cart buttons
    $('.add').on('click', function() {
    //increment item count
        itemCount++;
        //get the name of the item to add to cart use name attribute
        const itemName = $(this).attr('name');
        //cartLink variable to hold the html for the new cart item
        var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " <span class='del'>Remove</span></li>";
        //append list item to end of cart ul
        $('#cart ul').append(cartLink);
        //hide add cart button for this item
        $(this).hide();
        //update item count in cart display
        $('#itemCount').text(itemCount);
        
    });

});
