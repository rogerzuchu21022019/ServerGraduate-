const express = require(`express`);
const get_User_By_Controller = require("../../../components/admin/admin_controller/Get_User_By_Controller");
const router = express.Router();
router.get(`/get-user/:email`, async (req, res, next) => {
  try {
    const { email } = req.params;

    const result = await get_User_By_Controller(email);

    result
      ? res.status(200).json({
          error: false,
          status: "Fail",
          message: "Get User By Email Success",
          isLoading: false,
          data: result,
        })
      : res.status(404).json({
          error: true,
          status: "Fail",
          message: "Get User By Email Fail",
          isLoading: true,
          data: {},
        });
  } catch (error) {
   
  }
});
module.exports = router;
