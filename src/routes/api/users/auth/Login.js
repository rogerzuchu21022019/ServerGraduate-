const express = require(`express`);
const navigation = require("../../../../utils/client-web/Navigation");
const router = express.Router();

router.get("/auth-login", (req, res, next) => {
  res.render(`login`, { title:"namvt",home: navigation.HOME });
});
module.exports = router;
