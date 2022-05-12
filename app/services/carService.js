const carRepository = require("../repositories/carRepository");

module.exports = {
	async create(requestBody, userInfo) {
		try {
			requestBody.createdBy = userInfo.username;
			requestBody.updatedBy = userInfo.username;

			const cars = await carRepository.create(requestBody);
			return {
				id: cars.id,
				sizeId: cars.sizeId,
				name: cars.name,
				description: cars.description,
				price: cars.price,
				image: cars.image,
				isActive: cars.isActive,
				createdBy: cars.createdBy,
				updatedBy: cars.updatedBy,
				createdAt: cars.createdAt,
				updateAt: cars.updatedAt,
			};
		} catch (err) {
			throw err;
		}
	},
};
