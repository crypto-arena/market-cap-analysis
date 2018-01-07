"use strict";

class Resource {
	constructor(name, interval, model) {
		this.name = name;
		this.interval = interval;
		this.model = model;
		console.log(`Creating ${name} table for model -> ${model}`);
	}
	
	start() {}
	
	recurring() {
		setInterval(this.fetch, this.interval);
	}
	
	fetch() {}
	
	persist(data) {
		// persist generic data model in name table
		console.log(`Persisting ${JSON.stringify(data)}`);
	}
}

module.exports = {
    Resource
}