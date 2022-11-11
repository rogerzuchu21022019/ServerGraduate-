const JWT = require(`jsonwebtoken`);
const asyncHandler = require(`express-async-handler`);
const createError = require(`http-errors`);
const { ACCESS_TOKEN_KEY } = require("../utils/server/GenerateKey");
const VerifyTokenMiddleware = asyncHandler((req, res, next) => {
  // verify token middleware bearer
  if (!req.headers.authorization) {
    return next(createError(401, `Unauthorized`));
  }
  const authHeader = req.headers.authorization;
  const bearer = authHeader.split(` `);
  const token = bearer[1];
  const callbackToken = (error, payload) => {
    (req.payload = payload), next();
  };

  JWT.verify(token, ACCESS_TOKEN_KEY, callbackToken);
});

const verifyToken = async (req, res, next) => {
  try {
    if (req.headers[`x-token`]) {
      const token = req.headers[`x-token`];
      console.log(
        "🚀 ~ file: VerifyToken.js ~ line 24 ~ verifyToken ~ token",
        token
      );
      const payload = await JWT.verify(token, ACCESS_TOKEN_KEY);
      req.payload = payload;
      next();
    }
    return res.status(200).json({
      status: 401,
      message: "jwt expired",
    });
  } catch (error) {
    return res.status(200).json({
      status: 401,
      message: "jwt expired",
    });
  }
};
module.exports = [VerifyTokenMiddleware, verifyToken];
