"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class car extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.car_size);
		}
	}
	car.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			is_active: {
				type: DataTypes.BOOLEAN,
			},
			size_id: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			createdBy: {
				type: DataTypes.STRING,
			},
			updatedBy: {
				type: DataTypes.STRING,
			},
			deletedBy: {
				type: DataTypes.STRING,
			},
			deletedAt: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "car",
		}
	);
	return car;
};
