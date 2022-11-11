const express = require("express");
const AddController = require("../../../components/products/controller/AddProduct");
const VerifyTokenMiddleware = require("../../../middlewares/VerifyToken");
const router = express.Router();
require("dotenv").config();

const Redis = require(`ioredis`);
const redis = new Redis({
  port: process.env.PORT_REDIS,
  host: process.env.HOST_REDIS,
});

router.post(`/add-product`, VerifyTokenMiddleware, async (req, res) => {
  try {
    const { product } = req.body;

    const data = await AddController(product);
    console.log(
      "🚀 ~ file: AddProduct.js ~ line 9 ~ router.post ~ response",
      data
    );
    await redis.del("products");
    data
      ? res.json({
          status: "Success",
          error: false,
          message: "Add product successfully",
          isAdded: true,
          data: data,
        })
      : res.json({
          status: "Fail",
          error: true,
          message: "Add product Fail",
          isAdded: false,
          data: {},
        });
  } catch (error) {}
});
module.exports = router;
