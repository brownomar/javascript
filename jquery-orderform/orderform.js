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
            }else{
                $('#emailErr').text('Invalid email.');
            }
        }      
    });
    //address field required
    $('#shipaddr').blur(function(){
        var shipaddrVal = $(this).val();
        if (shipaddrVal === ''){
            $('#shipaddrErr').text('Address is required.');
        }
        else{
            $('#shipaddrErr').text('');
        }
    });
    //city field required
     $('#shipcity').blur(function(){
        var shipcityVal = $(this).val();
        if (shipcityVal === ''){
            $('#shipcityErr').text('City is required.');
        }
        else{
            $('#shipcityErr').text('');
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

    //initialize grand total to 0
    $('#gTotal').text('0.00');

    //get totals for each item
    $('#1').change(function(){
        var qty1 = $('#1').val();
        var price1 = $('#price1').text();
        var tot1 = (qty1*price1);
        $('#total1').text(tot1.toFixed(2));
        //validate input is number
        if(isNaN(qty1)){
            $('#total1').text('0.00');
        }else{
            $('#total1').text(tot1.toFixed(2));
        }
        return tot1;
    });
    $('#2').change(function(){
        var qty2 = $('#2').val();
        var price2 = $('#price2').text();
        var tot2 = (qty2*price2);
        $('#total2').text(tot2.toFixed(2));
        //validate input is number
        if(isNaN(qty2)){
            $('#total2').text('0.00');
        }else{
            $('#total2').text(tot2.toFixed(2));
        }
        return tot2;
    });
    $('#3').change(function(){
        var qty3 = $('#3').val();
        var price3 = $('#price3').text();
        var tot3 = (qty3*price3);
        $('#total3').text(tot3.toFixed(2));
        //validate input is number
        if(isNaN(qty3)){
            $('#total3').text('0.00');
        }else{
            $('#total3').text(tot3.toFixed(2));
        }
        return tot3;
    });

    //calculate subtotal
    var subtotal = tot1 + tot2 + tot3;

    //choose sales tax by selected state: tx=.08, all others = 0
    var state = $('#state').val();
    var salestax = 0;
    if (state === 'TX'){
        salestax = subtotal * 0.08;
    }else{
        salestax = 0;
    }
    //shipping: TX=5, ca and ny = 20, all others = 10
    var shipping = 0;
    if (state === 'TX'){
        shipping = 5;
    }else if (state === 'CA' || state === 'NY'){
        shipping = 20;
    }else {
        shipping = 10;
    }
    console.log(subtotal, salestax, shipping);
    //display subtotal, sales tax, shipping
    $('#subt').text(subtotal.toFixed(2));
    $('#tax').text(salestax.toFixed(2));
    $('#ship').text(shipping.toFixed(2));
    
    //calculate grand total
    var grandtotal = subtotal + salestax + shipping;
    $('#gTotal').text(grandtotal.toFixed(2));

    //disable submit if errors are present
    $(span).each(function(){
        if ($(this).text()){
            $('#place').attr('disabled',true);
        }
        else{
            $('#place').removeAttr('disabled');
        }

    });
    
    


});