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
      //currently when we create a second contact, it's adding it twice. Once to the top level .addressbook, and once to the new .clickable div inside of that one.
    $(".addressbook").append("<div>" + "</div>");
    $(".addressbook div").addClass("clickable");
    $(".clickable").append("<p>" + contactName + "</p>");
    $(".clickable p:first").addClass("front");
    $(".clickable").append("<p>" + contactPage + "</p>");
    $(".clickable p:last").addClass("back");
  });

  $(".addressbook").click(function() {
    $(".front", this).toggle();
    $(".back", this).toggle();
  });

});
