var express = require("express");
var axios = require("axios");
var router = express.Router();

const Redis = require(`redis`);

const resClient = Redis.createClient();

/* GET home page. */
router.get("/photos", async (req, res, next) => {
  const albumID = req.body.albumID;

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos`,
    { params: albumID }
  );

  res.render("index", { title: data });
});

module.exports = router;
