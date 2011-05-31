var config  = require('./config'),
    helpers = require('./helpers'),
    express = require('express'),
    engine  = require('ejs');

var postController = require('./controllers/PostController');

var webapp = express.createServer();

//basic configuration
webapp.register('.html', engine);
webapp.set('views', __dirname + '/views');
webapp.set('view engine', 'html');
webapp.use(express.bodyParser());
webapp.use(express.static(__dirname + '/public'));

//helpers
webapp.helpers(helpers);

//routes
webapp.get('/', postController.search);
webapp.get('/posts/new', postController.new);
webapp.get('/posts/:id/edit', postController.edit);
webapp.get('/posts/:id/delete', postController.delete);
webapp.get('/posts/:page', postController.search);
webapp.post('/posts/create', postController.create);
webapp.post('/posts/update', postController.update);

webapp.listen(config['WEBAPP_PORT']);