var mongoose = require('mongoose');

module.exports = function(options) {
	//todo options aqui
	mongoose.connect('mongodb://localhost/nodejs');

	mongoose.model('Post', new mongoose.Schema({
		nome: { type:String, index: false, unique: true},
		idade: { type:Number, index: true}
	});
	
	return mongoose;
}();