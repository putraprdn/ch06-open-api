const req = require("express/lib/request");
const { Car } = require("../models");

module.exports = {
	list() {
		return Car.findAll();
	},
	find(id) {
		return Car.findByPk(id);
	},
	create(requestBody) {
		return Car.create(requestBody);
	},
	update(id, reqBody) {
		return Car.update(
			{
				name: reqBody.name,
				description: reqBody.description,
				price: reqBody.price,
				sizeId: reqBody.sizeId,
				image: reqBody.image,
			},
			{
				where: {
					id,
				},
			}
		);
	},
};
