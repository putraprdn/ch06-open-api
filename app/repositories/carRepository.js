const { Car } = require("../models");

module.exports = {
	list() {
		return Car.findAll();
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
	find(id) {
		return Car.findByPk(id);
	},
};
