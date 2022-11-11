var express = require("express");
const Get_Users_Controller = require("../../../components/admin/admin_controller/Get_Users_Controller");
var router = express.Router();
require(`dotenv`).config()
const Redis = require(`ioredis`);
const redis = new Redis({
  port: process.env.PORT_REDIS,
  host: process.env.HOST_REDIS
});

router.get("/get-users", async (req, res, next) => {
  try {
    let cacheRedis = await redis.get("users");
    if (cacheRedis) {
      console.log(`Redis hit get data from storage =>>>>>>>>>>>>>>>>`);
      cacheRedis = await JSON.parse(cacheRedis);
      return res.json({
        error: false,
        status: "Success",
        message: "Get Users Successfully",
        isLoading: false,
        data: cacheRedis,
      });
    }
    
    const result = await Get_Users_Controller();
    console.log(`Redis miss data, adding new data =>>>>>>>>>>>>>>>>`);
    await redis.set("users", JSON.stringify(result), "EX", 30);

    result
      ? res.json({
          error: false,
          status: "Success",
          message: "Get Users Successfully",
          isLoading: false,
          data: result,
        })
      : res.json({
          error: true,
          status: `Fail`,
          message: `Get Fail ${error.message}`,
          isLoading: true,
          data: {},
        });
  } catch (error) {}
});
module.exports = router;
