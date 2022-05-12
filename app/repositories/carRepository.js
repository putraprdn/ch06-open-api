const { Car } = require("../models");

module.exports = {
	list() {
		return Car.findAll();
	},
	create(requestBody) {
		return Car.create(requestBody);
	},
};
