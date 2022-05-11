const model = require("../models"),
	{ genSalt, hash, compareSync } = require("bcrypt"),
	jwt = require("jsonwebtoken");

const cryptPassword = async (password) => {
	const salt = await genSalt(12);

	return hash(password, salt);
};

module.exports = {
	register: async (req, res) => {
		try {
			const data = await model.user.create({
				...req.body,
				password: await cryptPassword(req.body.password),
			});

			return res.status(200).json({
				success: true,
				error: 0,
				message: "OK",
				data: data,
			});
		} catch (error) {
			return res.status(500).json({
				success: false,
				error: error.code,
				message: error,
				data: null,
			});
		}
	},
	login: async (req, res) => {
		try {
			const userFound = await model.user.findOne({
				where: {
					email: req.body.email,
				},
			});

			if (!userFound)
				return res.status(404).json({
					success: false,
					error: 404,
					message: "Not Found",
					data: null,
				});

			if (compareSync(req.body.password, userFound.password)) {
				const token = jwt.sign(
					{
						id: userFound.id,
						username: userFound.username,
						email: userFound.email,
					},
					"rahasyah3h3h3",
					{ expiresIn: "12h" }
				);

				return res.status(200).json({
					success: true,
					error: 0,
					message: "OK",
					data: {
						token: token,
						id: userFound.id,
						username: userFound.username,
						email: userFound.email,
					},
				});
			}

			return res.status(409).json({
				success: false,
				error: 409,
				message: "Invalid Credentials",
				data: null,
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				success: false,
				error: error.code,
				message: error,
				data: null,
			});
		}
	},
};
