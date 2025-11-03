//use slide toggle to show/hide newsSignup form
$(document).ready(function(){
  $("#newsToggle").click(function(){
    $("#newsSignup").slideToggle("slow");
  });
});