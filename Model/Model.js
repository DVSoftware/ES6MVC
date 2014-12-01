
export default class Model {
	constructor(data) {
		if (this.constructor.name === 'Model') {
			throw new Error('Cannot instantiate the base model. You need to extend it.');
		}

		this.handlers = {};

		this.data = data;

		this.setProperties(this.data, this, []);
		debugger;
	}

	setProperties(source, destination, path) {
		var newPath;

		newPath = path.slice(0);
		newPath.push(item);

		Object.keys(source).forEach(function (item) {
			if (typeof source[item] === 'object' && source[item] !== null) {
				destination[item] = {};

				this.setProperties(source[item], destination[item], newPath);

			}

			Object.defineProperty(destination, item, {
				set: function (value) {
					if (typeof source[item] === 'object' && source[item] !== null) {
						destination[item] = {};

						this.setProperties(value, destination[item], newPath);
					} else {
						source[item] = value;
					}

				},
				get: function () {
					return source[item];
				}
			});
		}, this);
	}

	static findOne(id) {
		if (this.name === 'Model') {
			throw new Error('Cannot use findOne on a base model. You need to extend it.');
		}

		if (id && typeof id === 'object') {

		} else if (id) {

		} else {

		}
	}

	on(event, handler) {
		var [eventName, eventNamespace] = event.split('.');

		if (!this.handlers[eventName]) {
			this.handlers[eventName] = [];
		}

		this.handlers[eventName].push({
			namespace: eventNamespace,
			handler: handler
		});
	}

	off(event, handler) {

	}
}
