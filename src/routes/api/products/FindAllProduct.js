const express = require("express");
const findAllController = require("../../../components/products/controller/FindAllProducts");
const router = express.Router();
const Redis = require(`ioredis`);
const VerifyTokenMiddleware = require("../../../middlewares/VerifyToken");
const VerifyToken = require("../../../middlewares/VerifyToken");
require("dotenv").config();

const redis = new Redis({
  port: process.env.PORT_REDIS,
  host: process.env.HOST_REDIS,
});

router.get(`/`,VerifyToken, async (req, res) => {
  try {

    let cacheRedis = await redis.get(`products`);
    if (cacheRedis) {
      console.log(`Redis hit, get data from storage =>>>>>>>>>>>>>>>>`);
      cacheRedis = await JSON.parse(cacheRedis);
      return res.status(200).json({
        status: "Success",
        error: false,
        isLoadding: false,
        message: "Get all products successfully",
        data: cacheRedis,
      });
    } else {
      const data = await findAllController();
      console.log("🚀 ~ file: FindAllProduct.js ~ line 28 ~ router.get ~ data", data)
      const paginate = {
        totalItem: data.totalDocs,
        totalPage: data.totalPages,
        currentPage: data.page,
        products: data.docs,
      };
      console.log(`Redis miss data, adding new data =>>>>>>>>>>>>>>>>`);
      await redis.set(`products`, JSON.stringify(paginate), "EX", 30);
      data
        ? res.json({
            status: "Success",
            error: false,
            message: "Get all products successfully",
            isLoadding: false,
            data: paginate,
          })
        : res.json({
            status: "Fail",
            error: true,
            message: "Get all products Fail",
            isLoadding: true,
            data: {},
          });
    }
  } catch (error) {}
});
module.exports = router;
