Stripe.setPublishableKey(Meteor.settings.public.STRIPE_TEST_PUBLIC_KEY);

//Session variables for form CSS
Session.set("submitted", false);
Session.set("success", false);

Template.stripePayment.helpers({
  submitted: function() {
    return Session.get("submitted");
  },
  success: function() {
    return Session.get("success");
  }
});

//Format credit card boxes
Template.stripePayment.rendered = function () {
  $('input.cc-num').payment('formatCardNumber');
  $('input.cc-exp').payment('formatCardExpiry');
  $('input.cc-cvc').payment('formatCardCVC');
};

Template.stripePayment.events({
  'submit #donation-form': function(event) {
    //Prevent default form submission.
    event.preventDefault();

    //Various form retrieval and validation statements.
    var name = $('input.full-name').val();
    var email = $('input.e-mail').val();
    var cardValid = $.payment.validateCardNumber($('input.cc-num').val());
    var expValid = $.payment.validateCardExpiry($('input.cc-exp').payment('cardExpiryVal').month, $('input.cc-exp').payment('cardExpiryVal').year);
    var cvcValid = $.payment.validateCardCVC($('input.cc-cvc').val());


    //Regex expression for validating email
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailValid = re.test(email);

    Meteor.call('checkEmail', email, function(err, emailExists) {
      if (err) {
        return;
      } else {
        //Check if each input is valid, once passes all checks send form to Stripe to receive a token
        if (!cardValid) {
          alert("Please check your credit card number again!");
        } else if(!expValid) {
          alert("Please check your expiration date again!");
        } else if (!cvcValid) {
          alert("Please verify your security code on the back of your card!");
        } else if (!emailValid) {
          alert("Please fill out your email address!");
        } else if (name == "" || name == null) {
          alert("Please check your name!");
        } else if (emailExists) {
          alert("You've already signed up!");
        } else {
          //Populate hidden month and year folds for Stripe API
          Session.set("submitted", true);
          Session.set("success", false);
          $("#stripeMonth").val($('input.cc-exp').payment('cardExpiryVal').month);
          $("#stripeYear").val($('input.cc-exp').payment('cardExpiryVal').year);

          var form = $("#donation-form");

          // TODO: Disable the submit button to prevent repeated clicks below doesn't work...
          // form.find('button').prop('disabled', true);

          //Pass form to Stripe API
          Stripe.card.createToken(form, stripeResponseHandler);
        }
      }
    });
  }
});

//Stripe callback function
function stripeResponseHandler(status, response) {
  console.log("Response from Stripe!");
  console.log(response);
  if (response.error) {
    //Log any errors, if any. TODO: Handle the errors.
    console.log(response.error);
  } else {
    //Create a customer on the server side
    Meteor.call('createCustomer', response.id, $('input.full-name').val(), $('#emailInput').val(), $('#commentInput').val(), response.created, function(err, response){
      if(err) {
        Session.set('serverDataResponse', "Error:" + err.reason);
        return;
      }
      Session.set('serverDataResponse', response);
      Session.set("success", true);
    });
  }
};
