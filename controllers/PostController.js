module.exports = {
	new: function (request, response) {
		response.end('Post:New');
	},
	get: function (request, response, id) {
		response.end('Post:Get[' + request.params.id + ']');
	}
};
