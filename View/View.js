import Ractive from 'ractive';

export default class View {
	constructor(template) {
		this.template = template;
	}

	render(element, data) {
		var ractive = new Ractive({magic: true, template: this.template, data: data});
		ractive.render(element);
	}
}
