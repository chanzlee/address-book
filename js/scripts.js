//back-end




//front-end
$(document).ready(function() {
  $("#newcontact").submit(function(event) {

    event.preventDefault();
    var contactName = $("input#name").val();
    var contactPage =
      "Name: " + $("input#name").val() + "<br>" +
      "Phone Number: " + $("input#phone").val() + "<br>" +
      "Email: " + $("input#email").val() + "<br>" +
      "Adress: " + $("input#adress1").val() + "<br>" +
      "City/State/Zip: " + $("input#address2").val();


    // bug fixed by clarifying the target with find method and following chain command.

    $(".addressbook").append("<div></div>").find("div:last").addClass("clickable individual");

    $(".addressbook").find("div:last").append("<p>" + contactName + "</p>").find("p:first").addClass("individual-front");

    $(".addressbook").find("div:last").append("<p>" + contactPage + "</p>").find("p:last").addClass("individual-back hidden");

    //*** In the function below, click is triggered as many as there are ".clickable" elements exist, without die("click") at the end. It's hard to visualize this problem by using toggle().

    $(".clickable").click(function() {
      $(this).children(".individual-back").slideToggle();
      $(".clickable").die("click");
    });
  });


  //*** function below opens all hidden contactPages ***

  // $(".addressbook").click(function() {
  //   $(".individual-front").next().slideToggle();
  // });


  //*** function below allows only one personal information to be displayed. ***

  // $(".addressbook").click(function() {
  //   $(".individual-front", this).toggle();
  //   $(".individual-back", this).toggle();
  // });

});
