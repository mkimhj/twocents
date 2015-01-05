Users = new Mongo.Collection("users");

// CLIENT CODE
if (Meteor.isClient) {
  Stripe.setPublishableKey('pk_test_oE3JYruQ7Oe9BC0jAKGB1YLi');

  Template.video.helpers({
    played: function() {
      return Session.get("played");
    }
  });

  // YouTube API will call onYouTubeIframeAPIReady() when API ready.
  // Make sure it's a global variable.
  onYouTubeIframeAPIReady = function () {
      // New Video Player, the first argument is the id of the div.
      // Make sure it's a global variable.
      player = new YT.Player("player", {
          height: "405", 
          width: "720", 
          videoId: "wRtLMYtwMhE", 
          playerVars: {'color': "white", 'showinfo': 0},
          // Events like ready, state change, 
          events: {
              onReady: function (event) {
                  // Play video when player ready.
                  console.log("video ready");
                  // event.target.playVideo();
              },
              onStateChange: function(event) {
                if (player.getPlayerState() == 1) {
                  Session.set("played", true);
                  console.log("played");
                } else {
                  Session.set("played", false);
                  console.log("stopped");
                }
              }
          }
      });
  };
  YT.load();

  Template.payment.events({
    'submit #donation-form': function(event) {
      event.preventDefault();
      var name = $('input.full-name').val();
      var email = $('input.e-mail').val();
      console.log(name);
      console.log(email);

      var cardValid = $.payment.validateCardNumber($('input.cc-num').val());
      var expValid = $.payment.validateCardExpiry($('input.cc-exp').payment('cardExpiryVal').month, $('input.cc-exp').payment('cardExpiryVal').year);
      var cvcValid = $.payment.validateCardCVC($('input.cc-cvc').val());

      if (!cardValid) {
        alert("Please check your credit card number again!");
      } else if(!expValid) {
        alert("Please check your expiration date!");
      } else if (!cvcValid) {
        alert("Please check your security code on the back of your card!");
      }

      $("#stripeMonth").val($('input.cc-exp').payment('cardExpiryVal').month);
      $("#stripeYear").val($('input.cc-exp').payment('cardExpiryVal').year);

      var $form = $("#donation-form");

      // Disable the submit button to prevent repeated clicks
      // $form.find('button').prop('disabled', true);

      Stripe.card.createToken($form, stripeResponseHandler);

      // return false; //prevent default form submit (reloading page)
    }
  });

  //Format Credit Card Boxes
  Template.payment.rendered = function () {
    $('input.cc-num').payment('formatCardNumber');
    $('input.cc-exp').payment('formatCardExpiry');
    $('input.cc-cvc').payment('formatCardCVC');
  };

  function stripeResponseHandler(status, response) {
    var $form = $('#donation-form');
    console.log("returned from stripe nigga");
    if (response.error) {
      // Show the errors on the form
      console.log(response.error);
    } else {
      // response contains id and card, which contains additional card details
      var token = response.id;
      console.log(response);
      console.log(token);

      Meteor.call('createCustomer', response.id, $('#emailInput').val(), function(err, response){
        if(err) {
          Session.set('serverDataResponse', "Error:" + err.reason);
          return;
        }
        Session.set('serverDataResponse', response);
      });
    }
  };
}


// SERVER CODE
if (Meteor.isServer) {
  //code to run on startup
  Meteor.startup(function () {
    Stripe = StripeAPI('sk_test_Jy22poJjg8yfXWepvXhiADsz');
  });

  //method that client can access over the network to pass tokens
  Meteor.methods({
    //create a new customer
    createCustomer: function (token, address) {
      Stripe.customers.create({
        card: token,
        plan: "one",
        email: address
      }, function(err, customer) {
        // do something more meaningful
        return err;
      });

      //insert customer into database
      Users.insert({
        stripe_id: token,
        email: address,
      });
      }
  });
}
