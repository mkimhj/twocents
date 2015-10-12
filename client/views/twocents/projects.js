$(window).load(function(){
 $('.project-container').find('img').each(function(){
  var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
  $(this).addClass(imgClass);
 })
})

Template.projects.rendered = function() {
  //subscribe to only a subset later
};

Meteor.subscribe('projects');

Template.projects.events({
	'mouseenter .project': function(event) {
		// console.log(event);
		// var button = $(event.currentTarget).find(".project-button");
		var hiddenItems = $(event.currentTarget).find(".project-hidden");
		// button.fadeIn(300);
		hiddenItems.fadeIn(200);
	},

	'mouseleave .project': function(event) {
		// var button = $(event.currentTarget).find(".project-button");
		var hiddenItems = $(event.currentTarget).find(".project-hidden");
		// button.fadeOut(300);
		hiddenItems.fadeOut(200);
	}
});

Template.projects.helpers({
	projects: function() {
		return Projects.find({}, {sort: {dateFormatted: -1}, limit:3});
	}
});

