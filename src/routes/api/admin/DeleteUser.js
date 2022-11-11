const express = require(`express`);
const asyncHandler = require("express-async-handler");
const deleteUserController = require("../../../components/admin/admin_controller/Delete_User_Controller");
const router = express.Router();
router.delete(`/delete-user/:id`, async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log("🚀 ~ file: DeleteUser.js ~ line 9 ~ asyncHandler ~ id", id);
    const result = await deleteUserController(id);
    console.log("🚀 ~ file: DeleteUser.js ~ line 10 ~ router.delete ~ result", result)
    
    return res.status(200).json({
      message: "Delete Successfully",
      idDeleted: true,
      error: false,
    });
  } catch (error) {
    
    next(error);
  }
});
module.exports = router;
