Router.route('/', function() {
	this.render('index');
	YT.load();
	window.scrollTo(0, 0);
});

Router.route('/about', function () {
	this.render('team');
});

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});