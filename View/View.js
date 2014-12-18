import Ractive from 'ractive';
import Model from 'ES6MVC/Model/';
import Collection from 'ES6MVC/Collection/';

var lockProperty = '_ES6MVCRactiveLock';

var ModelWrapper = function (ractive, model, keypath, prefix) {
	this.value = model;
	model.on('change', this.modelChangeHandler = function (event, key, oldVal, newVal) {
		//debugger;
		//var release = acquireLock( model );
		setTimeout(function () {
			ractive.set(prefix(key, newVal));
		},0);
		//release();
	});
};

function acquireLock( key ) {
	key[lockProperty] = ( key[lockProperty] || 0 ) + 1;
	return function release() {
		key[lockProperty] -= 1;
		if ( !key[lockProperty] ) {
			delete key[lockProperty];
		}
	};
}
function isLocked( key ) {
	return !!key[lockProperty];
}

ModelWrapper.prototype = {
	teardown: function () {
		this.value.off( 'change', this.modelChangeHandler );
	},
	get: function () {
		return this.value;
	},
	set: function (keypath, value) {
		// Only set if the model didn't originate the change itself, and
		// only if it's an immediate child property
		//if ( !isLocked( this.value ) && keypath.indexOf( '.' ) === -1 ) {
		//	this.value[keypath] = value;
		//}
	}
};

Ractive.adaptors.ES6MVC = {
	filter: function (object) {
		return object instanceof Model || object instanceof Collection;
	},
	wrap: function (ractive, object, keypath, prefix) {
		if ( object instanceof Model ) {
			return new ModelWrapper(ractive, object, keypath, prefix);
		}
		//return new CollectionWrapper( ractive, object, keypath, prefix );
	}
};

export default class View {
	constructor(template) {
		this.template = template;


	}

	render(element, data) {
		var ractive = new Ractive({magic: true, template: this.template, data: data, adapt: [Ractive.adaptors.ES6MVC]});
		ractive.render(element);
	}
}
