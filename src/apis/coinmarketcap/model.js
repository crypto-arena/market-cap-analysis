"use strict";

class CoinMarketCapModel {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.symbol = data.symbol;
		this.rank = data.rank;
		this.price_usd = data.price_usd;
		this.price_btc = data.price_btc;
		this.a24h_volume_usd = data.a24h_volume_usd;
		this.market_cap_usd = data.market_cap_usd;
		this.available_supply = data.available_supply;
		this.total_supply = data.total_supply;
		this.max_supply = data.max_supply;
		this.percent_change_1h = data.percent_change_1h;
		this.percent_change_24h = data.percent_change_24h;
		this.last_updated = data.last_updated;
	}
}

module.exports = {
    CoinMarketCapModel
}