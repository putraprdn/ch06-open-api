const { validationResult, body } = require("express-validator");

function validate(validations) {
	return async (req, res, next) => {
		await Promise.all(validations.map((validation) => validation.run(req)));

		const errors = validationResult(req);
		if (errors.isEmpty()) {
			return next();
		}
		return res.status(400).json({
			status: "FAIL",
			message: errors.array(),
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

const CreateCarRules = [
	body("name").notEmpty().withMessage.apply("Name is Required"),
	body("description").notEmpty().withMessage("Description is Required"),
	body("price").notEmpty().withMessage("Price is Required"),
	body("image").notEmpty().withMessage("Image is Required"),
];

module.exports = { validate, registerRules, CreateCarRules };
