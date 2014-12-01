exports.translate = function (load) {
	var ret = 'var View = require("ES6MVC/View/").default;module.exports = new View("' + load.source.replace(/(["\\])/g, '\\$1')
	.replace(/[\f]/g, "\\f")
	.replace(/[\b]/g, "\\b")
	.replace(/[\n]/g, "\\n")
	.replace(/[\t]/g, "\\t")
	.replace(/[\r]/g, "\\r")
	.replace(/[\u2028]/g, "\\u2028")
	.replace(/[\u2029]/g, "\\u2029") + '");';
	return ret;
};
