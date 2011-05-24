var models = require('../models');

module.exports = {
	new: function (request, response) {
		response.render('posts/entry', { post : undefined });
	},
	create: function(request, response) {
		var Post = models.model('Post');
		var post = new Post( {
			title: request.body.title,
			content: request.body.content
		});

		//todo pensar em alguma maneira melhor para validar isso.
		if (post.title && post.content) {
			post.save(function(err, post) {
				if (err) throw new Error(err);
				response.redirect('/');
			});
		} else {
			response.render('posts/entry', {
				post: post,
				ERROS: ['Invalid form data']
				//	<%- partial('errors', {collection: ERRORS, as: 'error'}) %>
			});
		}
	}
};
