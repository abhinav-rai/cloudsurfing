Router.route('/', function() {
	this.render('index');
	window.scrollTo(0, 0);
});

Router.route('/about', function() {
	this.render('about');
	window.scrollTo(0, 0);
});

Router.route('/music', function() {
	this.render('music');
	window.scrollTo(0, 0);
});

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});