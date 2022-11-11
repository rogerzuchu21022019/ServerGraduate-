const Get_Users_Service = require("../admin_service/Get_Users_Service");

const Get_Users_Controller = async (page, size) => {
  const res = await Get_Users_Service(page, size);
  return res;
};

module.exports = Get_Users_Controller;
