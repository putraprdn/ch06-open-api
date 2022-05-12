const { validationResult, body } = require("express-validator");

function validate(validations) {
	return async (req, res, next) => {
		await Promise.all(validations.map((validation) => validation.run(req)));

		const errors = validationResult(req);
		if (errors.isEmpty()) {
			return next();
		}
		return res.status(400).json({
			success: false,
			error: 400,
			messages: errors.array(),
		});
	};
}

const registerRules = [
	body("email")
		.isEmail()
		.withMessage("Email Invalid")
		.notEmpty()
		.withMessage("Email is Required"),
	body("username").notEmpty().withMessage("Username is Required"),
	body("name").notEmpty().withMessage("Name is Required"),
	body("password").notEmpty().withMessage("Password is Required"),
];

module.exports = { validate, registerRules };
