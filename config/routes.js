const express = require("express");
const controllers = require("../app/controllers");
// const { registerRules } = require("../app/validators/rule");
// const checkToken = require("../app/middlewares/checkToken");
// const validate = require("../app/middlewares/validate");

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

apiRouter.get("/api/v1/posts", controllers.api.v1.postController.list);
apiRouter.post("/api/v1/posts", controllers.api.v1.postController.create);
apiRouter.put("/api/v1/posts/:id", controllers.api.v1.postController.update);
apiRouter.get("/api/v1/posts/:id", controllers.api.v1.postController.show);
apiRouter.delete("/api/v1/posts/:id",controllers.api.v1.postController.destroy);

// User endpoint
apiRouter.post("/api/v1/login", controllers.api.v1.userController.login);
apiRouter.post("/api/v1/register", controllers.api.v1.validatorController.validate(controllers.api.v1.validatorController.registerRules), controllers.api.v1.userController.register);
apiRouter.get("/api/v1/whoami", controllers.api.v1.userController.checkToken,controllers.api.v1.userController.whoAmI);

// Car endpoint
apiRouter.get("/api/v1/cars", controllers.api.v1.userController.checkToken, controllers.api.v1.userController.isAdmin, controllers.api.v1.carController.list);
apiRouter.post("/api/v1/car", controllers.api.v1.userController.checkToken, controllers.api.v1.userController.isAdmin, controllers.api.v1.carController.create);
apiRouter.put("/api/v1/car/:id", controllers.api.v1.userController.checkToken, controllers.api.v1.userController.isAdmin, controllers.api.v1.carController.update);
apiRouter.get("/api/v1/car/:id", controllers.api.v1.userController.checkToken, controllers.api.v1.userController.isAdmin, controllers.api.v1.carController.find);


module.exports = apiRouter;
