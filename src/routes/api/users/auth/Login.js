const express = require(`express`);
const navigation = require("../../../../utils/client-web/Navigation");
const router = express.Router();

router.all("/auth-login", (req, res, next) => {
  let user = req.body
  console.log("🚀 ~ file: Login.js ~ line 7 ~ router.get ~ user", user)
  res.render(`login`, { title:"namvt",
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    chart: navigation.CHART,
    register: navigation.REGISTER,
    analystic: navigation.ANALYSTIC,
    data_table: navigation.DATATABLE,
    user:user
  });
});
module.exports = router;
