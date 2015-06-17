// SANDBOXMODE
var sandboxMode = Meteor.settings.public.SANDBOX_MODE;

function validatePaypalDetails() {
  // set variables for the expiry date validation, cvc validation and expiry date 'splitter'
  var paypalName = $('input.full-paypal-name').val();
  if (paypalName != null && paypalName != "") {
    $('.full-paypal-name').addClass('identified');
  } else {
    $('.full-paypal-name').removeClass('identified');
  }
}

Session.set("paypalSubmitted", false);
Session.set("paypalSuccess", false);

Template.paypalPayment.helpers({
  paypalSubmitted: function() {
    return Session.get("paypalSubmitted");
  },
  paypalSuccess: function() {
    return Session.get("paypalSuccess");
  }
});

Template.paypalPayment.events({
  'submit #paypal-form': function(event) {
    //Prevent default form submission.
    event.preventDefault();

    //Various form retrieval and validation statements.
    var name = $('input.full-paypal-name').val();
    var email = Session.get("paypal-email");
    var nonce = Session.get("paypal-nonce");

    Meteor.call('checkEmail', email, function(err, emailExists) {
    	if (err) {
    		console.log(err);
    	} else {
    		if (emailExists && !sandboxMode) {
        	alert("You've already signed up!");
    		} else if (name == "" || name == null) {
    			alert("Please check your name!");
    		} else {
	    		Session.set("paypalSubmitted", true);
	    		Session.set("paypalSuccess", false);
		    	Meteor.call('createPaypalCustomer', name, email, $('#commentPaypalInput').val(), nonce, function(err, response) {
		    		if (err) {
		    			console.log("Paypal failed due to " + err);
		    		} else {
		    		  Session.set("paypalSuccess", true);
		    		}
		    	});
		    }
    	}
    });
  },

  'click .paymentInput, keypress .paymentInput': function(event) {
    validatePaypalDetails();
  }
});