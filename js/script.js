function alert_message(mes){
  $(".alert_text").text(mes);
  $(".alert_container").css('display','block');
}

$(document).ready(function(){
  $("#info_form").submit(function(){
    if (/^[a-zA-Z ]+$/.test($("#namein").val())){
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("#emailin").val())){
        if ($("#interestsin").val() !== ""){
          alert_message("Your info has been recorded. Check your email every Friday for new and exciting things! **This is not a real service, for now...**");
        } else {
          alert_message("Please enter at least one interest! Everyone has at least one.");
          return false;
        }
      } else {
        alert_message("Please enter a valid email");
        return false;
      }
    } else {
      alert_message("Please enter a valid name");
      return false;
    }
  });
  $(".alert_ack").click(function(){
    $(".alert_container").css('display','none');
    $(".alert_text").text("Please Check Your Input");
  });
});
