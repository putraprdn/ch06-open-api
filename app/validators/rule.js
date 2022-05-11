const { body } = require("express-validator");

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

module.exports = {
	registerRules,
};
