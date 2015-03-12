//Session variables for form CSS

// SANDBOXMODE
var sandboxMode = true;

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
    		return;
    	} else {
    		if (emailExists && !sandboxMode) {
        		alert("You've already signed up!");
    		} else if (name == "" || name == null) {
    			alert("Please check your name!");
    		} else {
	    		Session.set("paypalSubmitted", true);
	    		Session.set("paypalSuccess", false);
	    		console.log("creating paypal customer");
		    	Meteor.call('createPaypalCustomer', email, nonce, function(err, response) {
		    		if (err) {
		    			console.log("Paypal failed due to " + err);
		    		} else {
		    			console.log("Successfully created paypal customer");
		    		    Session.set("paypalSuccess", true);
		    		}
		    	});
		    }
    	}
    });
  }
});