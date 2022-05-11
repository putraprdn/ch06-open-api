"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CarSize extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.Car, {
				foreignKey: "sizeId",
				as: "Car",
			});
		}
	}
	CarSize.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "CarSize",
			tableName: "CarSizes",
			timestamps: true,
		}
	);
	return CarSize;
};
