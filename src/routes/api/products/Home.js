const express = require(`express`);
const navigation = require("../../../utils/client-web/Navigation");
const router = express.Router();
router.get("/home", (req, res, next) => {
  res.render("home", {
    home: navigation.HOME,
    login: navigation.LOGIN,
    logout: navigation.LOGOUT,
    title: "namvt",
  });
});
module.exports = router;
