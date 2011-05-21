var express = require('express');

var main = this;
var webapp = express.createServer();

var DefaultConfiguration = {
	'WEBAPP_PORT' : 8080
};

function configureWebApp() {
	main.configuration = [];
	if (!main.customConfiguration) main.customConfiguration = [];
	
	for (var option in DefaultConfiguration) {
		main.configuration[option] = main.customConfiguration[option] || DefaultConfiguration[option];
	}
}

module.exports.configure = function(configuration) {
	main.customConfiguration = configuration;
}

module.exports.startup = function() {
	configureWebApp();
	webapp.listen(main.configuration['WEBAPP_PORT']);
}

//basic configuration
webapp.configure(function() {
	webapp.set('views', '/views');
	webapp.set('view engine', 'ejs');
});

webapp.get('/', function(request, response) {
	response.end('it works!');
});
