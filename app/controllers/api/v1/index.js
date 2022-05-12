/**
 * @file contains entry point of controllers api v1 module
 * @author Muhamad Putra Perdana
 */

const userController = require("./userController");
const carController = require("./carController");
const validatorController = require("./validatorController");

module.exports = {
	userController,
	validatorController,
	carController,
};
