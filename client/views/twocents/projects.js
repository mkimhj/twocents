
Template.projects.rendered = function() {
  //subscribe to only a subset later
};

Meteor.subscribe('projects');

Template.projects.helpers({
	projects: function() {
		return Projects.find({}, {sort: {dateFormatted: 1}, limit:3});
	}
});

$(window).load(function(){
 $('.project-container').find('img').each(function(){
  var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
  $(this).addClass(imgClass);
 })
})