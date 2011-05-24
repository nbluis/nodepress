var config = require('../config'),
	mongoose = require('mongoose');

module.exports = function(options) {
	mongoose.connect('mongodb://localhost/' + config['MONGO_SCHEMA']);

	mongoose.model('Post', new mongoose.Schema({
		title: { type:String , index:true},
		content: { type:String },
		date : { type: Date, default: Date.now, index:true }
	}));
		
	return mongoose;
}();