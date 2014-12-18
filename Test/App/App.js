import $ from 'jquery';
import Controller from 'ES6MVC/Controller/';

import TestView from 'App/Views/test.mustache!';
import Model from 'App/Models/Test/';

class Test extends Controller {
	constructor(element) {
		var m = new Model({test: 123, bar: {asd: 1}});

		TestView.render(element, {foo: m});



		window.m = m;
		//TestView.set('foo', m.test);

		////
		//Model.findOne({});//
		super(element);

		// debugger;
	}
}

new Test('#main');
