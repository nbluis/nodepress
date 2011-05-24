var models = require('../models');

module.exports = {
	index: function (request, response) {
		models.model('Post').find({}, [], {sort:[['date',-1]]}, function(err, list) {
			if (err) throw new Error(err);
			response.render('index', { posts : list });
		});
	}
};
