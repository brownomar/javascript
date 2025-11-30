//ready function
$(document).ready(function(){
console.log("ready");
//Fly, you fools!
    //put cursor in name field
    $('#name').focus();

    //name field required
    $('#name').blur(function(){
        var nameVal = $(this).val();
        if (nameVal === ''){
            $('#nameErr').text('Name is required.');
        }
        else{
            $('#nameErr').text('');
            $('#orderErr').text('');
        } 
    });

    //address field required
    $('#address').blur(function(){
        var addressVal = $(this).val();
        if (addressVal === ''){
            $('#addressErr').text('Address is required.');
        }
        else{
            $('#addressErr').text('');
            $('#orderErr').text('');
        }
    });

    //city field required
     $('#city').blur(function(){
        var cityVal = $(this).val();
        if (cityVal === ''){
            $('#cityErr').text('City is required.');
        }
        else{
            $('#cityErr').text('');
            $('#orderErr').text('');
        } 
    });

    //zip field required
     $('#zip').blur(function(){
        var zipVal = $(this).val();
        if (zipVal === ''){
            $('#zipErr').text('Zip Code is required');
        }
        else{
            var zipRegex = /^\d{5}$/;
            if (zipRegex.test(zipVal)){
                $('#zipErr').text('');
                $('#orderErr').text('');
            }else{
                $('#zipErr').text('Invalid zip. 5 digits. Numbers only.');
            }
        }
    });

    //email required and valid
    $('#email').blur(function(){
        var emailVal = $(this).val();
        if (emailVal === ''){
            $('#emailErr').text('Email is required.');
        }
        else{
            var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if (emailRegex.test(emailVal)){
                $('#emailErr').text('');
                $('#orderErr').text('');
            }else{
                $('#emailErr').text('Invalid email.');
            }
        }      
    });

    //shipping address field required
    $('#shipaddr').blur(function(){
        var shipaddrVal = $(this).val();
        if (shipaddrVal === ''){
            $('#shipaddrErr').text('Address is required.');
        }
        else{
            $('#shipaddrErr').text('');
            $('#orderErr').text('');
        }
    });

    //shipping city field required
     $('#shipcity').blur(function(){
        var shipcityVal = $(this).val();
        if (shipcityVal === ''){
            $('#shipcityErr').text('City is required.');
        }
        else{
            $('#shipcityErr').text('');
            $('#orderErr').text('');
        } 
    });
    //shipping zip field required
     $('#shipzip').blur(function(){
        var shipzipVal = $(this).val();
        if (shipzipVal === ''){
            $('#shipzipErr').text('Shipping Zip Code is required');
        }
        else{
            $('#shipzipErr').text('')
            var shipzipRegex = /^\d{5}$/;
            if (shipzipRegex.test(shipzipVal)){
                $('#shipzipErr').text('');
                $('#orderErr').text('');
            }else{
                $('#shipzipErr').text('Invalid zip. 5 digits. Numbers only.');
            }
        }
    });
    //shipping confirmation email required and valid
    $('#email2').blur(function(){
        var email2Val = $(this).val();
        if (email2Val === ''){
            $('#email2Err').text('Confirmation Email is required.');
        }
        else{
            var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if (emailRegex.test(email2Val)){
                $('#email2Err').text('');
                $('#orderErr').text('');
            }else{
                $('#email2Err').text('Invalid email.');
            }
        }      
    });
    //copy billing address, city, zip if checked
    $('#copy').click(function(){
        if ($('#copy').prop('checked')){
        $('#shipaddr').val($('#address').val());
        $('#shipcity').val($('#city').val());
        $('#shipzip').val($('#zip').val());
        $('#shipstate').val($('#state').val());
    }
    //clear fields if unchecked
    else{
        $('#shipaddr').val('');
        $('#shipcity').val('');
        $('#shipzip').val('');
    }
    });

//choose sales tax by selected state: tx=.08, all others = 0
    function getTax (){
        var state = $('#state').val();
        var salestax = 0;
        if (state === 'TX'){
            salestax = 0.08;
        }
        else{
            salestax = 0;
        }
        return salestax;
    };
    
//shipping: TX=5, ca and ny = 20, all others = 10
    function getShipping (){
        var state = $('#state').val();
        var shipping = 0;
        if (state === 'TX'){
            shipping = 5;
        }else if (state === 'CA' || state === 'NY'){
            shipping = 20;
        }else {
            shipping = 10;
        }
        return shipping.toFixed(2);
    };
    
//initialize totals to 0
    $('#total1').text(0);
    $('#total2').text(0);
    $('#total3').text(0);
    $('#tax').text(0);
    $('#ship').text(0);
    $('#subt').text(0);
    $('#gTotal').text(0);
   

//get totals for each item as quantity changes
    $('#1').change(function(){
        var qty1 = $('#1').val();
        var price1 = $('#price1').text();
        var tot1 = (qty1*price1);
        $('#total1').text(tot1);
        //validate input is number
        if(isNaN(qty1)){
            $('#total1').text('0.00');
        }else{
            $('#total1').text(tot1);
        }
        return tot1;
    });
    $('#2').change(function(){
        var qty2 = $('#2').val();
        var price2 = $('#price2').text();
        var tot2 = (qty2*price2);
        $('#total2').text(tot2);
        //validate input is number
        if(isNaN(qty2)){
            $('#total2').text('0.00');
        }else{
            $('#total2').text(tot2);
        }
        return tot2;
    });
    $('#3').change(function(){
        var qty3 = $('#3').val();
        var price3 = $('#price3').text();
        var tot3 = (qty3*price3);
        $('#total3').text(tot3);
        //validate input is number
        if(isNaN(qty3)){
            $('#total3').text('0.00');
        }else{
            $('#total3').text(tot3);
        }
        return tot3;
    });

//calculate subtotal
    function getSubt(tot1, tot2, tot3){
        var subtotal = tot1 + tot2 + tot3;
        if (isNaN(subtotal)){
            subtotal = 0;
        }else{
        $('#subt').text(subtotal);
        }
        return subtotal;
    }

    //update subt when quantity changes
    $('#1, #2, #3').change(function(){
        var tot1 = parseFloat($('#total1').text()) || 0;
        var tot2 = parseFloat($('#total2').text()) || 0;
        var tot3 = parseFloat($('#total3').text()) || 0;
        var subtotal = getSubt(tot1, tot2, tot3);
        return subtotal;
    });
//display subtotal
$('#subt').text(getSubt());

//update sales tax when state changes
    $('#state').change(function(){
        var subtotal = parseFloat($('#subt').text()) || 0;
        var salestaxRate = getTax();
        var salestax = (subtotal * salestaxRate).toFixed(2);
        $('#tax').text(salestax);
        return salestax;
    });
//calculate tax after subtotal changes
    $('#1, #2, #3').change(function(){
        var subtotal = parseFloat($('#subt').text()) || 0;
        var salestaxRate = getTax();
        var salestax = (subtotal * salestaxRate).toFixed(2);
        
        $('#tax').text(salestax);
        return salestax;
    });
    

//update shipping when state changes
    $('#state').change(function(){
        var shipping = getShipping();
        $('#ship').text(shipping);
        return shipping;
    });

//update grand total when anything changes
    $('#1, #2, #3, #state').change(function(){
        var subtotal = parseFloat($('#subt').text()) || 0;
        var salestax = parseFloat($('#tax').text()) || 0;
        var shipping = parseFloat($('#ship').text()) || 0;
        var grandtotal = (subtotal + salestax + shipping).toFixed(2);
        $('#gTotal').text(grandtotal);
        return grandtotal;
    });

    // //disable submit if errors are present
    $('#place').click(function(event){
        if ($('#nameErr').text() !== '' ||
            $('#addressErr').text() !== '' ||
            $('#cityErr').text() !== '' ||
            $('#zipErr').text() !== '' ||
            $('#emailErr').text() !== '' ||
            $('#shipaddrErr').text() !== '' ||
            $('#shipcityErr').text() !== '' ||
            $('#shipzipErr').text() !== '' ||
            $('#email2Err').text() !== ''){
                event.preventDefault();
                alert('Please fix errors before submitting form.');
                $('#orderErr').text('Please fix errors before submitting form.');
            }
    });
//clear erro message on successful 
});