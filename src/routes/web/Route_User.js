const login = require(`./users/auth/Login`);
const logout = require(`./users/auth/Logout`);
const register = require(`./users/Register`);

module.exports = {
    login,
    logout,
    register,
}