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
    }
    //clear fields if unchecked
    else{
        $('#shipaddr').val('');
        $('#shipcity').val('');
        $('#shipzip').val('');
    }
    });

});