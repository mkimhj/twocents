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
		var projectList = [];
		var oneCompletedProject = Projects.find({"completed": true}, {sort: {dateFormatted: -1}, limit: 1});
		var notCompletedProjects = Projects.find({"completed": false}, {sort: {dateFormatted: 1}, limit: 2});

		notCompletedProjects.forEach(function(project) {
			projectList.push(project);
		});

		//swap the return values
		var temp = projectList[0];
		projectList[0] = projectList[1];
		projectList[1] = temp;

		oneCompletedProject.forEach(function(project) {
			projectList.push(project);
		});

		return projectList;
	}
});

