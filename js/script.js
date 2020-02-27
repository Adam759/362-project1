$(document).ready(function(){

  $("#info_form").submit(function(){
    if (/^[a-zA-Z ]+$/.test($("#namein").val())){
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("#emailin").val())){
        if ($(#interestsin).val() != ""){
          alert("Your info has been recorded. Check your email every Friday for new and exciting things!");
        } else {
          alert("Please enter at least one interest! Everyone has at least one.");
        }
      } else {
        alert("Please enter a valid email");
        return false;
      }
    } else {
      alert("Please enter a valid name");
      return false;
    }
  });

});
