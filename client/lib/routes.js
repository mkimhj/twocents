Router.route('/', function() {
	this.render('index');
	YT.load();
	window.scrollTo(0, 0);
});

Router.route('/about', function () {
	this.render('team');
	window.scrollTo(0, 0);
});

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});