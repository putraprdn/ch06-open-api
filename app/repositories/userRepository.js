const { User } = require("../models");

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
};
