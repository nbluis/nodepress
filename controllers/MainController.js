var models = require('../models'),
	config = require('../config');

module.exports = {
	index: function (request, response) {
		var limit = config['POSTS_PER_PAGE'];
		
		models.model('Post').find({}, [], {sort:[['date',-1]], limit : limit}, function(err, list) {
			if (err) throw new Error(err);
			response.render('index', { posts : list, page : 1 });
		});
	}
};
