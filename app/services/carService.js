const carRepository = require("../repositories/carRepository");

module.exports = {
	async list() {
		try {
			const cars = await carRepository.list();
			return {
				cars,
			};
		} catch (err) {
			throw err;
		}
	},

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
				deletedBy: cars.deletedBy,
				deletedAt: cars.deletedAt,
				createdAt: cars.createdAt,
				updateAt: cars.updatedAt,
			};
		} catch (err) {
			throw err;
		}
	},

	async update(requestBody) {
		try {
			const id = requestBody.id;
			await carRepository.update(id, requestBody);
			const carUpdated = await carRepository.find(id);

			if(!carUpdated) throw new Error("Car Doesn't Exist")

			return {
				id: carUpdated.id,
				sizeId: carUpdated.sizeId,
				name: carUpdated.name,
				description: carUpdated.description,
				price: carUpdated.price,
				image: carUpdated.image,
				isActive: carUpdated.isActive,
				createdBy: carUpdated.createdBy,
				updatedBy: carUpdated.updatedBy,
				deletedBy: carUpdated.deletedBy,
				deletedAt: carUpdated.deletedAt,
				createdAt: carUpdated.createdAt,
				updateAt: carUpdated.updatedAt,
			};
		} catch (err) {
			throw err;
		}
	},
	async find(id) {
		try {
			const car = await carRepository.find(id);

			if(!car) throw new Error("Car Doesn't Exist");

			return {
				id: car.id,
				sizeId: car.sizeId,
				name: car.name,
				description: car.description,
				price: car.price,
				image: car.image,
				isActive: car.isActive,
				createdBy: car.createdBy,
				updatedBy: car.updatedBy,
				deletedBy: car.deletedBy,
				deletedAt: car.deletedAt,
				createdAt: car.createdAt,
				updateAt: car.updatedAt,
			};
		} catch (err) {
			throw err;
		}
	},
};
