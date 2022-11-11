const LoginService = require("../user_service/Login_Service");
const bcrypt = require(`bcrypt`);
const createError = require(`http-errors`);
const { signToken, signRefreshToken } = require("../../../utils/server/Jwt");
const LoginController = async (email, password) => {
  try {
    const user = await LoginService(email, password);
    console.log(
      "🚀 ~ file: Login_Controller.js ~ line 8 ~ LoginController ~ user",
      user
    );

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw createError.Unauthorized(`Invalid password`);
    }
    const token = await signToken(user.id);
    const refreshToken = await signRefreshToken(user.id);
    const data = {
      token,
      refreshToken,
      user,
    };
    return data;
  } catch (error) {
    console.log(`error handle :::::::::`, error);
  }
};
module.exports = LoginController;
