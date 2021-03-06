const carService = require("../../../services/carService");

module.exports = {
	list(req, res) {
		carService
			.list()
			.then((car) => {
				res.status(200).json({
					status: "OK",
					data: car,
				});
			})
			.catch((err) => {
				res.status(400).json({
					status: "FAIL",
					message: err.message,
				});
			});
	},
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
	update(req, res) {
		carService
			.update(req.body, res.user)
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
	find(req, res) {
		carService
			.find(req.body.id)
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
	destroy(req, res) {
		carService
			.destroy(req.body.id, res.user)
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
