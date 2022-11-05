const express = require(`express`);
const navigation = require("../../../../utils/client-web/Navigation");
const router = express.Router();

router.get("/auth-logout", (req, res, next) => {
  res.render(`login`, { title:"namvt",
  home: navigation.HOME ,
  login: navigation.LOGIN,
  logout: navigation.LOGOUT ,
});
});
module.exports = router;
