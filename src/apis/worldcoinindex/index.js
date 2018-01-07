"use strict";

const Resource = require('./../../lib/parser').Resource;

class WorldCoinIndex extends Resource {
	constructor(data) {
		super('WorldCoinIndex', data);
	}
	
	persist() {
		super.persist();
		console.log('Persisting data from WorldCoinIndex');
	}
}

module.exports = {
    WorldCoinIndex
}