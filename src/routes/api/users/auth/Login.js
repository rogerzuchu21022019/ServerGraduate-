var express = require("express");
var router = express.Router();
const navigation = require(`../../../../utils/client-web/Navigation`);
const asyncHandler = require("express-async-handler");
const LoginController = require("../../../../components/users/user_controller/Login_Controller");
router.post("/auth-login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await LoginController(email, password);

    data.user.accessToken = data.token;
    data.user.refreshToken = data.refreshToken;
    data
      ? res.status(200).json({
          error: false,
          status: "Login Successfully",
          isLoggedIn: true,
          data: {
            token: data.token,
            user: {
              id: data.user.id,
              name: data.user.name,
              email: data.user.email,
              phone: data.user.phone,
              address: data.user.address,
              imageUrl: data.user.imageUrl,
              dob: data.user.dob,
              role: data.user.role,
              createdAt: data.user.createdAt,
              updatedAt: data.user.updatedAt,
            },
          },
        })
      : res.status(404).json({
          error: true,
          status: "Login Failed",
          isLoggedIn: false,
          data: {},
        });
  } catch (error) {}
});

module.exports = router;
