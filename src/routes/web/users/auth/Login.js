var express = require("express");
var router = express.Router();
const navigation = require(`../../../../utils/client-web/Navigation`);

router.get("/auth-login", (req, res, next) => {
  let user = req.body;

  res.render("login", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
    user: user.name,
  });
});

module.exports = router;
