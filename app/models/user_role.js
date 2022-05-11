"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class user_role extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.user);
		}
	}
	user_role.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "user_role",
			tableName: "user_roles",
			timestamps: true,
		}
	);
	return user_role;
};
