const { User } = require("../models");

module.exports = {
	login(email) {
		return User.findOne({
			where: {
				email,
			},
		});
	},
	register(body, encryptedPass) {
		return User.create(body, encryptedPass);
	},
};
