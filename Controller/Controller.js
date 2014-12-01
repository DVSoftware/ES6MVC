import $ from 'jquery';
import _s from 'underscore.string';

import 'ES6MVC/Utils/Events/Destroyed/';

export default class Controller {
	constructor(element, options = {}) {
		this.element = $(element);
		this.options = options;

		this.element.addClass(_s.underscored(this.constructor.name) + '_controller');
	}
}
