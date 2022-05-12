const { Car } = require("../models");

module.exports = {
	create(requestBody) {
		return Car.create(requestBody);
	},
};
