require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3500;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router");
const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const apiDocs = YAML.load("./api-doc.yaml");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocs));

app.listen(port, () => {
	console.log(`server running at port ${port}`);
});
