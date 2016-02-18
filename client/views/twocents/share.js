// Initialize Facebook
window.fbAsyncInit = function() {
	FB.init({
	  appId      : Meteor.settings.public.FACEBOOK_APP_ID,
	  status     : true,
	  xfbml      : true
	});
};

Template.ApplicationLayout.events({
	'click #nav-share': function(event) {
		var shareContainer = $(".share-container");
		shareContainer.removeClass("hide");
		shareContainer.velocity({top:"50%", opacity: .98}, 200, "ease");
	}
})

// Share Template Events
Template.share.events({
	'click #facebook-button': function(event) {
		FB.ui({
		  method: 'share',
		  href: 'https://twocentsaday.com'
		}, function(response){});
	},
	'click #twitter-button': function(event) {
		var shareText = "Share Two Cents on Twitter!";
		var URL = 'http://twitter.com/share?text='+shareText+'&url=https://twocentsaday.com';
		var windowName = "TwitterWindow";
		var width = 600;
		var height = 600;
		var left = (screen.width/2)-(width/2);
		var top = (screen.height/2)-(height/2);
		var windowSpecs = "width="+width+",height="+height+",top="+top+",left="+left;
		window.open(URL, windowName, windowSpecs);
	},

	'click #share-close-button': function(event) {
		$(".share-container").velocity({top:"0%", opacity: 0}, 200, "ease");
		$(".shareContainer").addClass("hide");
	}
});