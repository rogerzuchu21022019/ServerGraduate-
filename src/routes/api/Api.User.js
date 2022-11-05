const loginRouter = require("../api/users/auth/Login");
const registerRouter = require("../api/users/Register");
const logoutRouter = require("../api/users/auth/Logout");

module.exports = {
  loginRouter,
  logoutRouter,
  registerRouter,
};
