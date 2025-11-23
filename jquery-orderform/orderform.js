//ready function
$(document).ready(function(){
console.log("ready");
//Fly, you fools!
//put cursor in name field
$('#name').focus();
//name field required
$('#name').blur(function(){
    var nameVal = $('#name').val();
    if (nameVal = ''){
        $('#nameError').text('Name is required');
    }else{
        $('#nameError').text('');
    }
});
//email required and valid
$('#email').blur(function(){
    var emailVal = $('#email').val();
    
    if (emailVal = ''){
        $('#emailError').text('Email is required');
        }
    else{
        $('#emailError').text('');
        var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (emailRegex.test(emailVal)){
            $('#emailError').text('');
        }else{
            $('#emailError').text('Invalid email');
        }
    }
})
});