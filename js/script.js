function alert_message(head, mes){
  $(".alert_box h1").text(head);
  $(".alert_text").text(mes);
  $(".alert_container").css('display','block');
}

$(document).ready(function(){
  $("#info_form").submit(function(){
    if (/^[a-zA-Z ]+$/.test($("#namein").val())){
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("#emailin").val())){
        if ($("#interestsin").val() !== ""){
          if(confirm("Are you ready to submit?")){
            alert("Your info will now be submitted. Check your email every Friday for new and exciting things!")
          } else {
            return false;
          }
        } else {
          alert_message("Interest Error", "Please enter at least one interest! Everyone has at least one.");
          return false;
        }
      } else {
        alert_message("Email Error", "Please enter a valid email");
        return false;
      }
    } else {
      alert_message("Name Error", "Please enter a valid name");
      return false;
    }
  });
  $(".alert_ack").click(function(){
    $(".alert_container").css('display','none');
    $(".alert_text").text("Please Check Your Input");
  });
});
