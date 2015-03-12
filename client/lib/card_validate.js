// include jquery and jquery.payment before here

function validateEmail(email) { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(function() {
  //Function for highlighting boxes green upon completion
  var validateDetails = function() {
    // set variables for the expiry date validation, cvc validation and expiry date 'splitter'
    var name = $('input.full-name').val();
    var paypalName = $('input.full-paypal-name').val();
    var validEmail = validateEmail($('input.e-mail').val());
    var expiry = $('.cc-exp').payment('cardExpiryVal');
    var validateExpiry = $.payment.validateCardExpiry(expiry["month"], expiry["year"]);
    var validateCVC = $.payment.validateCardCVC($('.cc-cvc').val());
    // if statement on whether the card’s expiry is valid or not
    if (name != null && name != "") {
      $('.full-name').addClass('identified');
    } else {
      $('.full-name').removeClass('identified');
    }
    if (paypalName != null && paypalName != "") {
      $('.full-paypal-name').addClass('identified');
    } else {
      $('.full-paypal-name').removeClass('identified');
    }
    if (validEmail) {
      $('.e-mail').addClass('identified');
    } else {
      $('.e-mail').removeClass('identified');
    }
    if (validateExpiry) {
      // if the expiry is valid add the identified class
      $('.cc-exp').addClass('identified');
    } else {
      // remove again if the expiry becomes invalid
      $('.cc-exp').removeClass('identified');
    }
    // if statement on whether the card’s cvc is valid or not
    if (validateCVC) {
      // if the cvc is valid add the identified class
      $('.cc-cvc').addClass('identified');
    } else {
      // remove again if the cvc becomes invalid
      $('.cc-cvc').removeClass('identified');
    }
  }
  // this runs the above function every time stuff is entered into the card inputs
  $('.paymentInput').bind('change paste keyup', function() {
    validateDetails();
  });
  
});