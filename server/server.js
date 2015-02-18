Users = new Mongo.Collection("users");

// SERVER CODE
if (Meteor.isServer) {
  //Code that runs on startup.
  Meteor.startup(function () {
    Stripe = StripeAPI(Meteor.settings.STRIPE_TEST_SECRET_KEY);
  });

  //Client handler for creating customers. Check if email is already signed up.
  Meteor.methods({
    createCustomer: function (token, address, timestamp) {
      Stripe.customers.create({
        card: token,
        plan: "one",
        email: address
      }, function(err, customer) {
        // do something more meaningful?
        return err;
      });

      //Insert a new user into the MongoDB (TODO: send a confirmation email)
      Users.insert({
        stripeToken: token,
        email: address,
        createdAt: timestamp,
      });
      }
  });
}
