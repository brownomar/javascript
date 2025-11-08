//variable to count number of items in cart
let itemCount = 0;
//change cursor to pointer for add to cart buttons
$('.add').css('cursor', 'pointer');
//variable to hold html for creating a delete button 
const deleteButtonHTML = '<span class="delete">X</span>';
//add click event listener to add to cart buttons
$('.add').on('click', function() {
  //increment item count
    itemCount++;
    //get the name of the item to add to cart
    const itemName = $(this).siblings('h3').text();
    //create a new list item with the item name and delete button
    const listItemHTML = `<li>${itemName} ${deleteButtonHTML}</li>`;
    //append the new list item to the cart
    $('#cart ul').append(listItemHTML);
    //update the item count display
    $('#itemCount').text(itemCount);
});
