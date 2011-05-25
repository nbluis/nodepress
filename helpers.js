var config = require('./config');

module.exports = Helper = {
	getConfiguration : function(key) {
		return config[key];
	},
	formFor : function(reference) {
		if (!reference) throw new Error('invalid reference');
		
		var form = '<form action="';
		form += (reference.isNew) ? 'create' : 'update';
		form += '" method="post">';
		if (reference._id) form += '\n' + Helper.hiddenField('_id', reference._id);
		return form;
	},
	endForm : function() {
		return '</form>';
	},
	labelFor : function(fieldName) {
		var name = fieldName.toUpperCase();
		return '<label for="' + name + '"><p>' + name + ':</p>';
	},
	endLabel : function() {
		return '</label>';
	},
	hiddenField: function(fieldName, fieldValue) {
		var formField = '<input type="hidden" ';
		formField += 'name="' + fieldName +'" ';
		if (fieldValue) formField += 'value="' + fieldValue + '" ';
		formField += '/>';
		return formField;
	},
	textField : function(fieldName, fieldValue, options) {
		var formField = Helper.labelFor(fieldName);
		formField += '<input type="text" ';
		formField += 'name="' + fieldName +'" ';
		if (fieldValue) formField += 'value="' + fieldValue + '" ';
		for(var option in options) {
			formField += option + '="' + options[option] + '" ';
		}
		formField += '/>';
		formField += Helper.endLabel();
		return formField;
	},
	textArea: function(fieldName, fieldValue, options) {
		var formField = Helper.labelFor(fieldName);
		formField += '<textarea ';
		formField += 'name="' + fieldName +'" ';
		for(var option in options) {
			formField += option + '="' + options[option] + '" ';
		}
		formField += '>';
		if (fieldValue) formField += fieldValue;
		formField += '</textarea>';
		formField += Helper.endLabel();
		return formField;
	}
}