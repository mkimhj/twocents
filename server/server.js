Users = new Mongo.Collection("users");

// SERVER CODE
if (Meteor.isServer) {
  //Code that runs on startup.
  Meteor.startup(function () {
    //console.logs sent to client side (DISABLE FOR DEPLOYMENT)
    ConsoleMe.enabled = true;
    Stripe = StripeAPI(Meteor.settings.STRIPE_TEST_SECRET_KEY);
  });

  //Client handler for creating customers. Check if email is already signed up.
  Meteor.methods({
    createCustomer: function (token, address, timestamp) {
      var userObject = Users.find({email: address}, {limit:1}).fetch();
      var userExists = (typeof userObject !== 'undefined' && userObject.length > 0);
      console.log(userExists);
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

        //Insert a new user into the MongoDB (TODO: send a confirmation email)
        Users.insert({
          stripeToken: token,
          email: address,
          createdAt: timestamp,
        });
      }
    }
  });
}
