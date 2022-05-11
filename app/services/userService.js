const userRepository = require("../repositories/userRepository"),
	{ genSalt, hash, compareSync } = require("bcrypt"),
	jwt = require("jsonwebtoken");

const cryptPassword = async (password) => {
	const salt = await genSalt(12);

	return hash(password, salt);
};

module.exports = {
	async login(email, password) {
		try {
			const userCredential = await userRepository.login(email);
			if (!userCredential) {
				throw new Error("User Not Found");
			}

			if (compareSync(password, userCredential.password)) {
				const token = jwt.sign(
					{
						id: userCredential.id,
						username: userCredential.username,
						email: userCredential.email,
					},
					"rahasyah3h3h3",
					{ expiresIn: "12h" }
				);

				return {
					userCredential,
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
		return userRepository.register(reqBody);
	},
};
