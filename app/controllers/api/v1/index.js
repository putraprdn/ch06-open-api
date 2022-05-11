/**
 * @file contains entry point of controllers api v1 module
 * @author Muhamad Putra Perdana
 */

const postController = require("./postController");
const userController = require("./userController");

module.exports = {
	postController,
	userController,
};
