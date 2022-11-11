const User_Model = require("../../users/User_Model");

const Get_Users_Service = async () => {
  /*  Query sort list reverse in mongodb  */
  const query = {};
  const sortReverseArray = {
    sort: {
      createdAt: -1,
    },
    select: `name email phone address imageUrl role createdAt updatedAt`,
  };
  const res = await User_Model.find(query, {}, sortReverseArray);
  return res;
  //
};

module.exports = Get_Users_Service;
