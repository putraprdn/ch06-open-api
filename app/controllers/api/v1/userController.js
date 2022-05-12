const userService = require("../../../services/userService");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");
require("dotenv").config();

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

	whoAmI(req, res) {
		res.status(200).json({
			status: "OK",
			data: res.user,
		});
	},

	// Middleware
	checkToken(req, res, next) {
		try {
			let token = req.headers.authorization;

			if (!token) throw new Error("Please Provide a Token");

			if (token.toLowerCase().startsWith("bearer")) {
				token = token.slice("bearer".length).trim();
			}

			jwt.verify(
				token,
				process.env.ACCESS_TOKEN_SECRET,
				(error, payload) => {
					if (error) throw new Error("Invalid Token");
					res.user = payload;
					next();
				}
			);
		} catch (error) {
			res.status(422).json({
				status: "FAIL",
				message: error.message,
			});
		}
	},

	// Middleware
	async isAdmin(req, res, next) {
		try {
			await userService.isAdmin(res.user);
			next();
		} catch (err) {
			res.status(422).json({
				status: "FAIL",
				message: err.message,
			});
		}
	},

	// Middleware
	async isSuperAdmin(req, res, next) {
		try {
			await userService.isSuperAdmin(res.user);
			next();
		} catch (err) {
			res.status(422).json({
				status: "FAIL",
				message: err.message,
			});
		}
	},
	update(req, res) {
		userService
			.update(req.body)
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
