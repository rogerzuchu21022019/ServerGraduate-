const User_Model = require("../../users/User_Model");

const GetUserByService = async (email) => {
  const query = {
    email,
  };

  const res = await User_Model.findOne(query);

  return res;
};

module.exports = GetUserByService;
