const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const SearchController = require("../../../components/products/controller/Search");
const VerifyTokenMiddleware = require("../../../middlewares/VerifyToken");
router.post(`/search`,VerifyTokenMiddleware, async (req, res,next) => {
    try {
        const { name, brand, description, specials } = req.query;
        const data = await SearchController(name, brand, description, specials);
        data
          ? res.status(200).json({
              status: "Success",
              error: false,
              isLoadding: false,
              message: "Search product successfully",
              data: data,
            })
          : res.status(400).json({
              status: "Fail",
              error: true,
              isLoadding: true,
              message: "Search product fail",
              data: {},
            });

    } catch (error) {
        
    }
})
module.exports = router;