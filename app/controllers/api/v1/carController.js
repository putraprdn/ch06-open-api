const carService = require("../../../services/carService");

module.exports = {
	create(req, res) {
		carService
			.create(req.body, res.user)
			.then((car) => {
				res.status(200).json({
					status: "OK",
					data: car,
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