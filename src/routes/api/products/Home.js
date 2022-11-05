const express = require(`express`);
const navigation = require("../../../utils/client-web/Navigation");
const router = express.Router();
router.get('/home', (req, res, next) => {
  res.render("home", { login: navigation.LOGIN, title: "namvt" });
});
module.exports = router;
