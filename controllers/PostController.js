var config = require('../config'),
    models = require('../models');

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
				response.redirect('posts/' + post._id);
			});
		}
	},
	update: function(request, response) {
		Post.findById(request.body._id, [], {}, function(err, post) {
			if (err) throw new Error(err);
			post.title = request.body.title;
			post.content = request.body.content;
			post.save(function(err, post) {
				response.redirect('posts/' + post._id);
			});
		});
	},
	delete: function(request, response) {
		Post.remove({_id: request.params.id}, function(err) {
			if (err) throw new Error(err);
			response.redirect('/');
		});	
	},
	search: function(request, response) {
		var limit = config['POSTS_PER_PAGE'];
		var page = request.params.page || 1;
		if (page < 0) page = 1;
		var skip = limit * (page - 1);
		
		Post.find({}, [], {sort:[['date',-1]], skip : skip, limit: limit}, function(err, list) {
			if (err) throw new Error(err);
			response.render('index', { posts : list , page : page });
		});
	}
};
