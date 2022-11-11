
const get_User_By_Service = require("../admin_service/Get_User_By_Service");

const Get_User_By_Controller = async (email) => {
  const res = await get_User_By_Service(email);
  return res;
};

module.exports = Get_User_By_Controller;
