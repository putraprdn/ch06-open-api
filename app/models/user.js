"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class user extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.user_role);
		}
	}
	user.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			is_active: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
			role_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "user",
			timestamps: true,
		}
	);
	return user;
};
