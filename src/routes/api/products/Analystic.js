const express = require(`express`);
const navigation = require("../../../utils/client-web/Navigation");
const router = express.Router();
router.get("/analystic", (req, res, next) => {
  res.render("analystic", {
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