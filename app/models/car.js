"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Car extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.CarSize, {
				foreignKey: "sizeId",
				as: "CarSize",
			});
		}
	}
	Car.init(
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
			isActive: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
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
			sizeId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Car",
		}
	);
	return Car;
};
