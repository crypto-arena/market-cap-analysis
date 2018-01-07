"use strict";

const 	Resource = require('./../../lib/parser').Resource,
		CoinMarketCapModel = require('./model.js').CoinMarketCapModel,
		url = 'https://api.coinmarketcap.com/v1/ticker/',
		fetch = require('node-fetch'),
		INTERVAL = 1000;

class CoinMarketCap extends Resource {
	constructor() {
		super('CoinMarketCap', INTERVAL, CoinMarketCapModel);
		this.start();
	}

	start() {
		console.log('Starting');
		super.recurring();

	}
	
	resolve(data) {
		let model = new CoinMarketCapModel(data);
		console.log(model);
		model.persist();
	}
	
	fetch() {
		fetch(url)
			.then(function(response) {
				this.persist(response);
			}.bind(this))
			.catch(error => {
				console.log(error);
			});
	}
	
	persist(data) {
		data.json().then(function(j) {
			console.log(j);
		})
		//super.persist(data);
	}
}

module.exports = {
    CoinMarketCap
}