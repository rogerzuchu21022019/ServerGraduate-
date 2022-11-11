const JWT = require(`jsonwebtoken`);
const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = require("./GenerateKey");
const Redis = require(`ioredis`);
require(`dotenv`).config();
const redis = new Redis({
  port: 6379,
  host: `127.0.0.1`,
});
const signToken = (userID) => {
  const payload = { userID };
  const secret = ACCESS_TOKEN_KEY;
  const expiredTimeOptions = {
    expiresIn: "30",
  };
  return new Promise((resolve, reject) => {
    JWT.sign(payload, secret, expiredTimeOptions, (error, token) => {
      error ? reject(error) : resolve(token);
    });
  });
};

const signRefreshToken = (userID) => {
  return new Promise((resolve, reject) => {
    const payload = { userID };
    const secret = REFRESH_TOKEN_KEY;
    const expiredTimeOptions = {
      expiresIn: 60 * 60 * 24 * 7 * 365,
    };
    const callbackToken = async (error, token) => {
      if (error) reject(error);
      let REFRESH_TOKEN = process.env.REFRESH_TOKEN_REDIS;
      console.log("🚀 ~ file: Jwt.js ~ line 32 ~ callbackToken ~ REFRESH_TOKEN", REFRESH_TOKEN)
      console.log("🚀 ~ file: Jwt.js ~ line 32 ~ callbackToken ~ REFRESH_TOKEN", userID)
      REFRESH_TOKEN = `${REFRESH_TOKEN}_${userID}`;
      await redis.set(REFRESH_TOKEN, token, "EX", 60 * 60 * 24 * 7 * 365);
      resolve(token);
    };

    JWT.sign(payload, secret, expiredTimeOptions, callbackToken);
  });
};

module.exports = {
  signToken,
  signRefreshToken,
};
