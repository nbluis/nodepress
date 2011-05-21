var express = require('express');
var mainController = require('./controllers/MainController');
var postController = require('./controllers/PostController');

var webapp = express.createServer();

var DefaultConfiguration = {
	'WEBAPP_PORT' : 8080
};

//basic configuration
webapp.set('views', '/views');
webapp.set('view engine', 'ejs');

//controller configuration
webapp.all('/', mainController.index);
webapp.all('/posts/new', postController.new);
webapp.all('/posts/:id', postController.get);

webapp.listen(DefaultConfiguration['WEBAPP_PORT']);