var models = require('../models');
var Post = models.model('Post');

module.exports = {
	new: function (request, response) {
		response.render('posts/entry', { post : new Post() });
	},
	edit: function (request, response) {
		Post.findById(request.params.id, [], {}, function(err, post) {
			if (err) throw new Error(err);
			response.render('posts/entry', { post : post });
		});
	},
	create: function(request, response) {
		var post = new Post( {
			title: request.body.title,
			content: request.body.content
		});

		//todo pensar em alguma maneira melhor para validar isso.
		if (post.title && post.content) {
			post.save(function(err, post) {
				if (err) throw new Error(err);
				response.render('posts/entry', { post : post });
			});
		}
	},
	update: function(request, response) {
		Post.findById(request.body._id, [], {}, function(err, post) {
			if (err) throw new Error(err);
			post.title = request.body.title;
			post.content = request.body.content;
			post.save(function(err, post) {
				response.render('posts/entry', { post : post });
			});
		});
	}
};
