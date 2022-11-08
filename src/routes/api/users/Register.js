const express = require(`express`);
const UserController = require("../../../components/users/User.Controller");
const navigation = require("../../../utils/client-web/Navigation");
const router = express.Router();

router.get("/register", async (req, res, next) => {
  try {
    const { email, password, address, phone, name } = req.body;
    const response = await UserController({
      email,
      password,
      address,
      phone,
      name,
    });
    console.log(
      "🚀 ~ file: Register.js ~ line 10 ~ router.get ~ response",
      response
    );
    res.json({
      message: "ok",
      data: response,
    });
  } catch (error) {}
});
module.exports = router;
