var config = require('./config');

module.exports = {
	getConfiguration : function(key) {
		return config[key];
	}
}