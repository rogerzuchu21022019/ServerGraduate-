const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");

const ManagerMiddleware = (app) => {
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  const fixPublic = express.static(path.join(__dirname, "public"));
  app.use(fixPublic);
};

module.exports = ManagerMiddleware;
