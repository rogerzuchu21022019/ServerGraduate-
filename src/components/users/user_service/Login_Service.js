const User_Model = require("../User_Model");
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const createError = require(`http-errors`);

const LoginService = async (email, password) => {
  try {
    const query = { email };
    const user = await User_Model.findOne(query);
    if (!user) {
      throw createError.NotFound(`User not found`);
    }
    return user;
  } catch (error) {
    console.log(`error handle :::::::::`, error);
  }
};

module.exports = LoginService;
