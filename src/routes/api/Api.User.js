const login = require("../api/users/auth/Login");
const register = require("../api/users/Register");
const logout = require("../api/users/auth/Logout");

module.exports = {
  login,
  logout,
  register,
};
