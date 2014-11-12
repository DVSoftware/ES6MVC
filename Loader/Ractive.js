var Ractive = require('ractive');
exports.translate = function (load) {
	return 'var Ractive = require("ractive");module.exports = new Ractive({template: "' + load.source.replace(/(["\\])/g, '\\$1')
	.replace(/[\f]/g, "\\f")
	.replace(/[\b]/g, "\\b")
	.replace(/[\n]/g, "\\n")
	.replace(/[\t]/g, "\\t")
	.replace(/[\r]/g, "\\r")
	.replace(/[\u2028]/g, "\\u2028")
	.replace(/[\u2029]/g, "\\u2029") + '"});';
};
