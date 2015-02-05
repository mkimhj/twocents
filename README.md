Twocents Repo
========
Frameworks: 

Meteor: http://docs.meteor.com/#/basic/

Skeleton CSS: http://getskeleton.com

Less CSS: http://lesscss.org

APIs: Stripe, Youtube

**To run locally:**
meteor --settings config/settings.json

**To deploy:** (Haven't looked into deploying with a settings.json file yet)
meteor deploy twocentsaday.com & meteor deploy www.twocentsaday.com

Directory Hierarchy
========
The client files are loaded only on the user side. Anything in the public folder is generally used for static files, for now I've put the credit card pngs and the pictures of our faces inside this folder. Finally, we can make a server folder for loading files only on the server side, for now I haven't found a need for this.

Inside config are our API keys, Public Keys are viewable on the client side, while anything outside of the Public section is loaded only on server side.

I did my best to organize the code while writing everything, but it's still very disorganized. Templates in the twocents.html can be put into separate files etc. I will try to organize everything better in the upcoming weeks.
