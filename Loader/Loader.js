/**
 * Bootstraps the library
 * @name Loader
 */

function Loader() {
	var scripts, currentScript, currentScript, currentPath, directory, head, a;

	scripts       = document.getElementsByTagName('script');
	currentScript = scripts[scripts.length - 1];
	currentPath   = currentScript.src;
	directory     = currentPath.substr(0, currentPath.lastIndexOf('/') + 1);

	a      = document.createElement('a');
	a.href = currentScript.src;

	currentScriptPath = a.pathname + a.search;
	directoryPath     = currentScriptPath.substring(1, currentScriptPath.lastIndexOf('/') + 1);
	head              = document.getElementsByTagName('head')[0];

	this.loadScript = function (path, cb) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src  = directory + '../' + path;
		head.appendChild(script);

		if (typeof cb === 'function') {
			script.onload = cb;
		}
	}

	this.runApp = function() {
		System.paths.jquery = directoryPath + '../Lib/jquery/dist/jquery.min.js';
		System.paths.lodash = directoryPath + '../Lib/lodash/dist/lodash.min.js';
		System.paths['underscore.string'] = directoryPath + '../Lib/underscore.string/dist/underscore.string.min.js';
		System.paths['ES6MVC/*'] = directoryPath + '../*.js';

		System.import(currentScript.getAttribute('data-main')).catch(console.error.bind(console));
	}
}


var loader = new Loader();

loader.loadScript('Lib/traceur/traceur.min.js', function () {
	loader.loadScript('Lib/es6-module-loader/dist/es6-module-loader.js');
	loader.loadScript('Lib/system.js/dist/system.js', function () {
		loader.runApp();
	});
});
