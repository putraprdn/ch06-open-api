const userService = require("../../../services/userService");

module.exports = {
	login(req, res) {
		userService
			.login(req.body.email, req.body.password)
			.then((user) => {
				res.status(200).json({
					status: "OK",
					data: user,
				});
			})
			.catch((err) => {
				res.status(422).json({
					status: "FAIL",
					message: err.message,
				});
			});
	},
	register(req, res) {
		userService
			.register(req.body)
			.then((user) => {
				res.status(200).json({
					status: "OK",
					data: user,
				});
			})
			.catch((err) => {
				res.status(422).json({
					status: "FAIL",
					message: err.message,
				});
			});
	},
};
