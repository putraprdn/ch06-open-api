const { User } = require("../models");
const { Op } = require("sequelize");

module.exports = {
	login(email) {
		return User.findOne({
			where: {
				email,
			},
		});
	},
	register(requestBody) {
		return User.create(requestBody);
	},
	isAdmin(id) {
		return User.findOne({
			where: {
				id,
				roleId: {
					[Op.or]: [1, 2],
				},
			},
		});
	},
	update(id, requestBody) {
		return User.update(
			{
				name: requestBody.name,
				username: requestBody.username,
				email: requestBody.email,
				roleId: requestBody.roleId,
			},
			{
				where: {
					id,
				},
			}
		);
	},
	isSuperAdmin(id) {
		return User.findOne({
			where: {
				id,
				roleId: 1,
			},
		});
	},
	find(id) {
		return User.findByPk(id);
	},
};
