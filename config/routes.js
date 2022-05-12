const express = require("express");
const controllers = require("../app/controllers");
// const { registerRules } = require("../app/validators/rule");
// const checkToken = require("../app/middlewares/checkToken");
// const validate = require("../app/middlewares/validate");
const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const apiDocs = YAML.load("./api-doc.yaml");

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */

// open api endpoint using swagger ui
apiRouter.use("/api-docs/v1", swaggerUI.serve, swaggerUI.setup(apiDocs));

apiRouter.get("/api/v1/posts", controllers.api.v1.postController.list);
apiRouter.post("/api/v1/posts", controllers.api.v1.postController.create);
apiRouter.put("/api/v1/posts/:id", controllers.api.v1.postController.update);
apiRouter.get("/api/v1/posts/:id", controllers.api.v1.postController.show);
apiRouter.delete(
	"/api/v1/posts/:id",
	controllers.api.v1.postController.destroy
);

apiRouter.get(
	"/api/v1/whoami",
	controllers.api.v1.userController.checkToken,
	controllers.api.v1.userController.whoAmI
);
apiRouter.post("/api/v1/login", controllers.api.v1.userController.login);
apiRouter.post(
	"/api/v1/register",
	controllers.api.v1.validatorController.validate(
		controllers.api.v1.validatorController.registerRules
	),
	controllers.api.v1.userController.register
);
/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
// apiRouter.get("/api/v1/errors", () => {
// 	throw new Error(
// 		"The Industrial Revolution and its consequences have been a disaster for the human race."
// 	);
// });

// apiRouter.use(controllers.api.main.onLost);
// apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
