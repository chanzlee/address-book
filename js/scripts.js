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

    $(".addressbook").append("<div>" + contactName + "</div>");
    $(".addressbook").append("<div>" + contactPage + "</div>");
  });

});
