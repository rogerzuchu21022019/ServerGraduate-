// const User_Model = require("../../users/User_Model");
const User_Model = require(`../../users/User_Model`);

const DeleteUserService = async (id) => {
  try {
    const query = id;
    const optionsRemove = {
      new: true,
      upsert: true,
    };
    const callbackFun = (error) => {
      console.log(`error removing user`, error);
    };
    return await User_Model.findByIdAndDelete(
      query,
      optionsRemove,
      callbackFun
    );
  } catch (error) {}
};
module.exports = DeleteUserService;
