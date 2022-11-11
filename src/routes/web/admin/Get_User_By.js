const express = require(`express`);
const get_User_By_Controller = require("../../../components/admin/admin_controller/Get_User_By_Controller");

const router = express.Router();
router.get(`/get-user/`, async (req, res, next) => {
  try {
    const {email,role}  = req.query;
    const result = await get_User_By_Controller(email,role);
    res.json({
      error:false,
      message:"Get User By Email Success",
      data: result
    })
  } catch (error) {
    res.json({
      error:true,
      message:"Get User By Email Fail",
      data: {}
    })
  }
});
module.exports = router;
