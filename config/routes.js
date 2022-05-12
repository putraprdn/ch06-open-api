const express = require("express");
const controllers = require("../app/controllers");

// Some dependencies for api documenations
const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const apiDocs = YAML.load("./api-doc.yaml");

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */

// api documentation endpoint using swagger ui
apiRouter.use("/api-docs/v1", swaggerUI.serve, swaggerUI.setup(apiDocs));

// User endpoint
apiRouter.post("/api/v1/user/login", controllers.api.v1.userController.login);
apiRouter.post(
	"/api/v1/user/register",
	controllers.api.v1.validatorController.validate(
		controllers.api.v1.validatorController.registerRules
	),
	controllers.api.v1.userController.register
);
apiRouter.get(
	"/api/v1/user/whoami",
	controllers.api.v1.userController.checkToken,
	controllers.api.v1.userController.whoAmI
);
apiRouter.put(
	"/api/v1/user/update",
	controllers.api.v1.userController.checkToken,
	controllers.api.v1.userController.isSuperAdmin,
	controllers.api.v1.userController.update
);

// Car endpoint
apiRouter.get(
	"/api/v1/cars",
	controllers.api.v1.userController.checkToken,
	controllers.api.v1.userController.isAdmin,
	controllers.api.v1.carController.list
);
apiRouter.post(
	"/api/v1/car/create",
	controllers.api.v1.userController.checkToken,
	controllers.api.v1.userController.isAdmin,
	controllers.api.v1.validatorController.validate(
		controllers.api.v1.validatorController.CreateCarRules
	),
	controllers.api.v1.carController.create
);
apiRouter.put(
	"/api/v1/car/update",
	controllers.api.v1.userController.checkToken,
	controllers.api.v1.userController.isAdmin,
	controllers.api.v1.carController.update
);
apiRouter.post(
	"/api/v1/car/find",
	controllers.api.v1.userController.checkToken,
	controllers.api.v1.userController.isAdmin,
	controllers.api.v1.carController.find
);
apiRouter.post(
	// soft delete (only set "isActive" to false) and you can use this endpoint to take a peek any deleted data by id
	"/api/v1/car/delete",
	controllers.api.v1.userController.checkToken,
	controllers.api.v1.userController.isAdmin,
	controllers.api.v1.carController.destroy
);

module.exports = apiRouter;
