Twocents Repo
========
Frameworks: 

Meteor: http://docs.meteor.com/#/basic/

Skeleton CSS: http://getskeleton.com

Less CSS: http://lesscss.org

Sendgrid: https://sendgrid.com

APIs: Stripe, Youtube

**To run locally:**
meteor --settings config/settings.json

**To deploy:** (Haven't looked into deploying with a settings.json file yet)

meteor deploy twocentsaday.com & meteor deploy www.twocentsaday.com

`meteor list` will show all packages used, remove `autopublish` and `aldeed:console-me` for deployment!

Directory Hierarchy
========
The client files are loaded only on the user side. Anything in the public folder is generally used for static files, for now I've put the credit card pngs and the pictures of our faces inside this folder. Finally, we can make a server folder for loading files only on the server side, for now I haven't found a need for this.

Inside config are our API keys, Public Keys are viewable on the client side, while anything outside of the Public section is loaded only on server side.

I did my best to organize the code while writing everything, but it's still very disorganized. Templates in the twocents.html can be put into separate files etc. I will try to organize everything better in the upcoming weeks.

Other than that, good folder structure is outlined in this stackoverflow post, it's unofficial, so take it for a grain of salt: 
http://stackoverflow.com/questions/10122977/what-are-the-best-practices-for-structuring-a-large-meteor-app-with-many-html-te

Todo List
========
**Directory**
* ~~Add a gitignore for files that shouldn't be in the repo~~
* ~~Organize the massive twocents.html file into separate html files~~
* ~~Move the client javascript into a client/js/twocents.js file~~
* ~~Move the server javascript into a server/js/twocents.js file~~
* ~~It would definitely help code readability to move Youtube stuff in a youtube.js, stripe payments to a stripeHandler.js file, etc.~~

**Implementation**
* ~~Handle rejection of signup to Stripe if user has already signed up (check against MongoDB)~~
* ~~Save user emails into MongoDB, and look into how to review list of emails~~
* ~~Notify client side if their email is already signed up.~~
* ~~Send users a confirmation email maybe using SendGrid or MailChimp (https://sendgrid.com) (or use THIS: https://gentlenode.com/journal/meteor-20-verify-an-email-with-meteor-accounts/42)~~
* Figure out what to put in the "How it works" section.
* ~~Connect twocentsdonations@gmail.com with info@twocentsaday.com~~
* ~~Create an email list for everyone who signs up~~

**Style**
* Style and make the Donation page view to look better.
* Create a better "Finished Form" page other than some text, maybe the form turns into a two cents png and flies up like in our mobile app video?
* ~~Restrict the toolbar to be of a certain width (960px)? The logo and the buttons width are currently maxed out to the page~~
* Find a better color scheme that represents us.
* Create pngs? Or maybe find someone in InnoD who would be willing to find pngs.
* By no means is the font and such finalized, feel free to explore any better options and share.

**Logistics**
* Find a nonprofit, maybe two, to connect with and start marketing once site is up and running. (Emily)
* Get a corporate / nonprofit bank account to connect our donations with. (Shyam)
* Look for nonprofit funding (Freeventures, YC, etc.)

Server Side Debugging
========
In line 8 of Meteor.startup you will see `ConsoleMe.enabled = true;`, this opens a subscription for the client to receive console logs from the Server, if you want to enable listening on the client side type `ConsoleMe.subscribe()` in the browser console. Make sure to enter this every time you refresh the page. Also, DISABLE THIS FOR DEPLOYMENT.
