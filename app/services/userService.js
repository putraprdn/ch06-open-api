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
	async register(requestBody) {
		requestBody.password = await cryptPassword(requestBody.password);
		userRegistered = await userRepository.register(requestBody);
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
	async isSuperAdmin(userInfo) {
		try {
			const verified = await userRepository.isSuperAdmin(userInfo.id);

			if (!verified) throw new Error("Unauthorized Access");

			res.user = verified;
		} catch (err) {
			throw err;
		}
	},

	async update(requestBody) {
		try {
			const id = requestBody.id;
			await userRepository.update(id, requestBody);
			
			const userUpdated = await userRepository.find(id);

			if (!userUpdated) throw new Error("User Doesn't Exist");

			return {
				userCredentials: {
					id: userUpdated.id,
					roleId: userUpdated.roleId,
					name: userUpdated.name,
					username: userUpdated.username,
					email: userUpdated.email,
					isActive: userUpdated.isActive,
					createdAt: userUpdated.createdAt,
					updatedAt: userUpdated.updatedAt,
				},
			};
		} catch (err) {
			throw err;
		}
	},
};
