var express = require("express");
var axios = require("axios");
var router = express.Router();

const {createClient} = require(`redis`);

const DEFAULT_EXPIRED = 3600;
const resClient = createClient({
  legacyMode: true,
});
/* GET home page. */
router.get("/photos", async (req, res, next) => {
  const albumID = req.body.albumID;

  resClient.on("error", (err) => console.log("Redis Client Error", err));
  // const { data } = await axios.get(
  //   `https://jsonplaceholder.typicode.com/photos`,
  //   { params: albumID }
  // );
  await resClient.connect()
  await resClient.get(`photos`, async (error, photos) => {
    if (error)
      console.log(
        "🚀 ~ file: index.js ~ line 16 ~ resClient.get ~ error",
        error
      );
    if (photos != null) {
      console.log(`cache hit da co data -dang di tiep`);
      const photo111 =JSON.stringify(photos)
      return res.render("index", { title: photo111 });
    } else {
      console.log(`cache miss chua co data--- dang di add do`);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`,
        { params: albumID }
      );
      await resClient.SETEX(`photos`, DEFAULT_EXPIRED, JSON.stringify(data));
      res.json(data);
    }
  });

  // res.render("index", { title: JSON.stringify(data) });
});
router.get("/", async (req, res, next) => {

  res.render(`index`, {  title:"haha" });
});

module.exports = router;
