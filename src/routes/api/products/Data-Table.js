const express = require(`express`);
const navigation = require("../../../utils/client-web/Navigation");
const router = express.Router();
router.get("/data-table", (req, res, next) => {
  res.render("data-table", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
  });
});
module.exports = router;
