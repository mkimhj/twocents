
Template.login.rendered = function() {
  Accounts._loginButtonsSession.set('dropdownVisible', true);
  $("#login-sign-in-link").hide();
  Meteor.subscribe('projects');
};

Template.login.helpers({
	projects: function() {
		return Projects.find({}, {sort: {dateFormatted: 1}});
	}
});

Template.login.events({
	'click [data-logout]': function() {
		Meteor.logout(function(){
			console.log('logged out');
		})
	},

	'click .removeButton': function(event) {
		// console.log(event.currentTarget);
		var classList = event.currentTarget.className.split(/\s+/);
		console.log(classList);
		Meteor.call('removeProject', classList[1], function(err, response) {
			if (err) {
				// do something
				console.log("something went wrong while deleting a project :(");
			} else {
				// do another thing
				console.log("successfully removed project");
			}
		});
	},

	'keypress .projectRow': function(event) {
		if (event.keyCode == 13) {
			var target = $(event.currentTarget);
			var id = null;
			console.log(event.currentTarget);
			event.stopPropagation();

			if (target.find("._id")[0]) {
				id = target.find("._id")[0].innerHTML;
		    }
			var organizationName = target.find(".organizationName")[0].innerHTML.replace(/&nbsp;/g,'');
			var projectName = target.find(".projectName")[0].innerHTML.replace(/&nbsp;/g,'');
			var projectDescription = target.find(".projectDescription")[0].innerHTML.replace(/&nbsp;/g,'');
			var imageUrl = target.find(".imageUrl")[0].innerHTML.replace(/&nbsp;/g,'');
			var fundsRaised = target.find(".fundsRaised")[0].innerHTML.replace(/&nbsp;/g,'');
			var fundsRequired = target.find(".fundsRequired")[0].innerHTML.replace(/&nbsp;/g,'');
			var targetDate = target.find(".targetDate")[0].innerHTML.replace(/&nbsp;/g,'');
			var dateFormatted = new Date(Date.parse(target.find(".targetDate")[0].innerHTML.replace(/&nbsp;/g,'')));

			Meteor.call('insertProject', id, organizationName, projectName, projectDescription, imageUrl, fundsRaised, fundsRequired, targetDate, dateFormatted, function(err, response) {
				if (err) {
					//do something
					console.log("err");
				} else {
					// show successful on client
					console.log("success");
				}
			});

			if (!id) {
				$(target.find(".organizationName").html(""));
				$(target.find(".projectName").html(""));
				$(target.find(".projectDescription").html(""));
				$(target.find(".imageUrl").html(""));
				$(target.find(".fundsRaised").html(""));
				$(target.find(".fundsRequired").html(""));
				$(target.find(".targetDate").html(""));
			}

			return false;
		}
	}
});

