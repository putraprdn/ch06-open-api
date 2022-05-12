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
	register(reqBody) {
		return User.create(reqBody);
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
};
