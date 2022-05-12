const { Car } = require("../models");

module.exports = {
	list() {
		return Car.findAll({
			where: {
				isActive: true,
			},
		});
	},
	create(requestBody) {
		return Car.create(requestBody);
	},
	update(id, user, reqBody) {
		return Car.update(
			{
				name: reqBody.name,
				description: reqBody.description,
				price: reqBody.price,
				sizeId: reqBody.sizeId,
				image: reqBody.image,
				updatedBy: user,
			},
			{
				where: {
					id,
					isActive: true,
				},
			}
		);
	},
	find(id) {
		return Car.findOne({
			where: {
				id,
				isActive: true,
			},
		});
	},
	destroy(id, user) {
		return Car.update(
			{
				isActive: false,
				deletedBy: user,
				deletedAt: new Date(),
			},
			{
				where: {
					id,
				},
			}
		);
	},
};
