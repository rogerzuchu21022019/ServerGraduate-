const express = require("express");
const path = require("path");

const ManagerMiddleware = require("./middlewares/Manager");
const HandlerError = require("./middlewares/HandlerError");

const ManagerRouter = require("./routes/manager/Manager");

const app = express();

ManagerMiddleware(app);

const fixPublic = express.static(path.join(__dirname, "public"));

ManagerRouter(app,fixPublic);

HandlerError(app)

module.exports = app;
