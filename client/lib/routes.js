Router.route('/', function() {
	this.render('temp');
	YT.load();
	window.scrollTo(0, 0);
});

Router.route('/dev', function() {
	this.render('index');
	YT.load();
	window.scrollTo(0, 0);
});

Router.route('/about', function () {
	this.render('team');
	window.scrollTo(0, 0);
});

Router.route('/privacy', function() {
	this.render('privacy');
	window.scrollTo(0,0);
});

Router.route('/contact', function() {
	this.render('contact');
	window.scrollTo(0,0);
});

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});