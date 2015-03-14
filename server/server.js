Users = new Mongo.Collection("users");
var gateway;

// SERVER CODE
if (Meteor.isServer) {
  //Code that runs on startup.
  Meteor.startup(function () {
    // Braintree Setup
    var braintree = Meteor.npmRequire('braintree');
    gateway = braintree.connect({
      environment: braintree.Environment.Sandbox,
      publicKey: Meteor.settings.BT_PUBLIC_KEY,
      privateKey: Meteor.settings.BT_PRIVATE_KEY,
      merchantId: Meteor.settings.BT_MERCHANT_ID
    });

    // Stripe Setup
    Stripe = StripeAPI(Meteor.settings.STRIPE_TEST_SECRET_KEY);

    // Sendgrid Setup
    process.env.MAIL_URL = SENDGRID_SMTP_URL;
  });

  //Client handler for creating customers. Check if email is already signed up.
  Meteor.methods({
    createCustomer: function (token, name, address, comment, timestamp) {
      var userObject = Users.find({email: address}, {limit:1}).fetch();
      var userExists = (typeof userObject !== 'undefined' && userObject.length > 0);
      if (userExists) {
        //DO SOMETHING ON CLIENT SIDE HERE
        console.log("user already exists in mongodb");
      } else {
        console.log("doesn't exist");
        Stripe.customers.create({
          card: token,
          plan: "one",
          email: address
        }, function(err, customer) {
          // do something more meaningful?
          return err;
        });

        Users.insert({
          stripeToken: token,
          name: name,
          email: address,
          createdAt: timestamp,
        });
    
        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete?
        //this.unblock()

        //confirmation email
        Email.send({
          from: "The Two Cents Team <info@twocentsaday.com>",
          to: address,
          subject: "Two Cents Subscription Confirmation",
          text: "Hello " + name + ",\n Thanks for signing up! Your two cents donations have begun (and will show as a $1.00 charge every fifty days on your bank statement). \n \n We really appreciate your contribution and hope you can help us spread the word by telling your friends and family. \n \n We'll reach you again at this email once we have collected enough donations to help make a difference. \n \n Here's to saving the world, \n The Two Cents Team"
        });

        console.log("sent confirmation");

        Email.send({
          from: "info@twocentsaday.com",
          to: "trigger@recipe.ifttt.com",
          subject: String(address),
          text: String(comment)
        });
      }
    },

    checkEmail: function(email) {
      var userObject = Users.find({email: email}, {limit:1}).fetch();
      var userExists = (typeof userObject !== 'undefined' && userObject.length > 0);

      if (userExists) {
        return true;
      } else {
        return false;
      }
    },

    getPaypalClientToken: function (clientId) {
      var generateToken = Meteor.wrapAsync(gateway.clientToken.generate, gateway.clientToken);
      var options = {};

      if (clientId) {
        options.clientId = clientId;
      }

      var response = generateToken(options);

      return response.clientToken;
    },

    createPaypalCustomer: function (address, paymentNonce) {
      var createCustomer = Meteor.wrapAsync(gateway.customer.create, gateway.customer);
      var findCustomer = Meteor.wrapAsync(gateway.customer.find, gateway.customer);
      var newSubscription = Meteor.wrapAsync(gateway.subscription.create, gateway.subscription);

      createCustomer({
        firstName: address,
        email: address,
        paymentMethodNonce: paymentNonce
      }, function(err, result) {
        if (result.success) {
          findCustomer(result.customer.id, function(err2, customer) {
            console.log(customer);
            if (err2) {
              throw new Meteor.error("customer doesn't exist", "The customer was failed to be created");
            } else {
              var subscriptionRequest = {
                paymentMethodToken: customer.paypalAccounts[0].token,
                planId : "b7tb"
              };       
              newSubscription(subscriptionRequest, function(err3, result) {
                console.log("Subscription Status " + result.subscription.status);
              });
            }
          })
        } else {
          throw new Meteor.error("500", "[ERROR] Paypal unsuccessful: " + err);
        }
      })
    }
  });
}
