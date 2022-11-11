const express = require("express");
const path = require("path");

const ManagerMiddleware = require("./middlewares/Manager");
const HandlerError = require("./middlewares/HandlerError");

const ApiManagerRouter = require("./routes/manager/ApiManager");

const app = express();

ManagerMiddleware(app);

const fixPublic = express.static(path.join(__dirname, "public"));

ApiManagerRouter(app,fixPublic);

HandlerError(app)

module.exports = app;
