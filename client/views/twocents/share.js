// Initialize Facebook
window.fbAsyncInit = function() {
FB.init({
  appId      : Meteor.settings.public.FACEBOOK_APP_ID,
  status     : true,
  xfbml      : true
});
};

// Share Template Events
Template.share.events({
	'click #facebook-button': function(event) {
		FB.ui({
		  method: 'share',
		  href: 'https://twocentsaday.com'
		}, function(response){});
	}
});