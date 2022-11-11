const express = require(`express`);
const asyncHandle = require(`express-async-handler`);
const UpdateUserController = require("../../../components/admin/admin_controller/Update_User_Controller");
const router = express.Router();
router.put(
  `/update-user/:id`,
  asyncHandle(async (req, res, next) => {
    const { name, phone, address, imageUrl, dob } = req.body;
    const { id } = req.params;

    try {
      const data = await UpdateUserController(
        name,
        phone,
        address,
        imageUrl,
        dob,
        id
      );
      data
        ? res.json({
            status: "Success",
            message: "Update is successfully",
            error: false,
            isUpdated: true,
            data: {
              id: data.id,
              name: data.name,
              email: data.email,
              phone: data.phone,
              address: data.address,
              imageUrl: data.imageUrl,
              dob: data.dob,
              role: data.role,
              createdAt: data.createdAt,
              updatedAt: data.updatedAt,
            },
          })
        : res.json({
            status: "Fail",
            message: "Update is Fail",
            error: true,
            isUpdated: false,
            data: {},
          });
    } catch (error) {
      next(error);
    }
  })
);
module.exports = router;
