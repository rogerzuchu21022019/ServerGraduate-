var express = require("express");
const get_User_By_Controller = require("../../../components/admin/admin_controller/Get_User_By_Controller");
var router = express.Router();

/* GET users listing. */
router.get("/get-users", async (req, res, next) => {
  try {
    const result = await get_User_By_Controller();
    res.json({
      error: false,
      message: "Get Success",
      data: result,
    });
  } catch (error) {
    res.json({
      error: true,
      message: "Get Fail",
      data: {},
    });
  }
});
module.exports = router;
