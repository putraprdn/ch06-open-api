const res = require("express/lib/response");
const userRepository = require("../repositories/userRepository"),
	{ genSalt, hash, compareSync } = require("bcrypt"),
	jwt = require("jsonwebtoken");

require("dotenv").config();

const cryptPassword = async (password) => {
	const salt = await genSalt(12);

	return hash(password, salt);
};

module.exports = {
	async login(email, password) {
		try {
			const userCredentials = await userRepository.login(email);
			if (!userCredentials) {
				throw new Error("User Not Found");
			}

			if (compareSync(password, userCredentials.password)) {
				const token = jwt.sign(
					{
						id: userCredentials.id,
						name: userCredentials.name,
						username: userCredentials.username,
						email: userCredentials.email,
					},
					process.env.ACCESS_TOKEN_SECRET,
					{ expiresIn: "12h" }
				);

				return {
					userCredentials: {
						id: userCredentials.id,
						roleId: userCredentials.roleId,
						name: userCredentials.name,
						username: userCredentials.username,
						email: userCredentials.email,
						isActive: userCredentials.isActive,
						createdAt: userCredentials.createdAt,
						updatedAt: userCredentials.updatedAt,
					},
					token,
				};
			}

			throw new Error("Invalid Credential");
		} catch (err) {
			throw err;
		}
	},
	async register(reqBody) {
		reqBody.password = await cryptPassword(reqBody.password);
		userRegistered = await userRepository.register(reqBody);
		return {
			userCredentials: {
				id: userRegistered.id,
				roleId: userRegistered.roleId,
				name: userRegistered.name,
				username: userRegistered.username,
				email: userRegistered.email,
				isActive: userRegistered.isActive,
				createdAt: userRegistered.createdAt,
				updatedAt: userRegistered.updatedAt,
			},
		};
	},
	async isAdmin(userInfo) {
		try {
			const verified = await userRepository.isAdmin(userInfo.id);

			if (!verified) throw new Error("Unauthorized Access");

			res.user = verified;
		} catch (err) {
			throw err;
		}
	},
};
