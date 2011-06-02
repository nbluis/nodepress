var config  = require('./config'),
    helpers = require('./helpers'),
    express = require('express'),
    engine  = require('ejs');
    routeUtils = require('./routeUtils');

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
routeUtils.createDefaultModelRoutes(webapp, postController, '/posts');

webapp.listen(config['WEBAPP_PORT']);