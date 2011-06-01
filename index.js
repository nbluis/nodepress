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
webapp.use(express.methodOverride());
webapp.use(express.static(__dirname + '/public'));

//helpers
webapp.helpers(helpers);

//routes
webapp.get('/', postController.search);
webapp.get('/:page', postController.search);
webapp.get('/posts/new', postController.new);
webapp.get('/posts/:id', postController.show);
webapp.get('/posts/:id/edit', postController.edit);
webapp.post('/posts/', postController.create);
webapp.put('/posts/:id', postController.update);
webapp.delete('/posts/:id', postController.destroy);

webapp.listen(config['WEBAPP_PORT']);