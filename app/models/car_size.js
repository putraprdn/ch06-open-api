"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class car_size extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.user);
		}
	}
	car_size.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "car_sizes",
			tableName: "car_size",
			timestamps: true,
		}
	);
	return car_size;
};
