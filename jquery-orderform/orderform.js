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
            $('#nameErr').text('Name is required,');
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
    //state field required
     $('#state').blur(function(){
        var stateVal = $(this).val();
        if (stateVal === ''){
            $('#stateErr').text('State is required');
        }
        else{
            $('#stateErr').text('');
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



            
       

});