const deleteUserService = require("../admin_service/Delete_User_Service");

const DeleteUserController = async (id) => {
  try {
    return await deleteUserService(id);
  } catch (error) {
    console.log(`error handle `, error.message);
  }
};
module.exports = DeleteUserController;
