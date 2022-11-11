var express = require("express");
var router = express.Router();
<<<<<<< HEAD:src/routes/chart.js
const navigation = require(`../utils/Navigation`);
var axios = require("axios");

const { createClient } = require(`redis`);

const DEFAULT_EXPIRED = 3600;
const resClient = createClient({
  legacyMode: true,
});

/* GET users listing. */
router.get("/chart", async (req, res, next) => {

  /* ---------------------------------- aaaa ---------------------------------- */
    try {
      resClient.on("Client error", (err) =>
        console.log("Redis Client Error", err)
      );
      // const { data } = await axios.get(
      //   `https://jsonplaceholder.typicode.com/photos`,
      //   { params: albumID }
      // );
      await resClient.connect();
      await resClient.get(`photos`, async (error, photos) => {
        if (error)
          console.log(
            "🚀 ~ file: index.js ~ line 16 ~ resClient.get ~ error",
            error
          );
        if (photos != null) {
          console.log(
            "🚀 ~ file: chart.js ~ line 33 ~ awaitresClient.get ~ photos",
            photos
          );
          console.log(`cache hit da co data -dang di tiep`);

          return res.render("chart", {
            home: navigation.HOME,
            login: navigation.LOGIN,
            logout: navigation.LOGOUT,
            chart: navigation.CHART,
            register: navigation.REGISTER,
            analystic: navigation.ANALYSTIC,
            data_table: navigation.DATATABLE,
            data: photos,
          });
        } else {
          console.log(`cache miss chua co data--- dang di add do`);
          const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/photos`
          );
          await resClient.SETEX(
            `photos`,
            DEFAULT_EXPIRED,
            JSON.stringify(data)
          );

          return res.render("chart", {
            home: navigation.HOME,
            login: navigation.LOGIN,
            logout: navigation.LOGOUT,
            chart: navigation.CHART,
            register: navigation.REGISTER,
            analystic: navigation.ANALYSTIC,
            data_table: navigation.DATATABLE,
            data: data,
          });
        }
      });
    } catch (error) {}

  /* ----------------------------------- aaa ---------------------------------- */
  // console.log("🚀 ~ file: chart.js ~ line 9 ~ router.get ~ albumID", albumID)

  // const { data } = await axios.get(
  //   `https://jsonplaceholder.typicode.com/photos`,
  //   { params: albumID }
  //   );
  // res.render("chart", {
  //   home: navigation.HOME,
  //   login: navigation.LOGIN,
  //   logout: navigation.LOGOUT,
  //   chart: navigation.CHART,
  //   register: navigation.REGISTER,
  //   analystic: navigation.ANALYSTIC,
  //   data_table: navigation.DATATABLE,
  //   data: data,

  // });
  //   console.log("🚀 ~ file: chart.js ~ line 26 ~ router.get ~ data", data)
=======
const navigation = require(`../../../utils/client-web/Navigation`);

/* GET users listing. */
router.get("/chart", function (req, res, next) {
  res.render("chart", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
  });
>>>>>>> server2:src/routes/web/products/Chart.js
});

module.exports = router;
