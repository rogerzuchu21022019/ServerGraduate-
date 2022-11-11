const findAllService = require("../services/FindAllProducts");

const FindAllController =async () => {
  const response = await findAllService()
    console.log("🚀 ~ file: FindAllProducts.js ~ line 5 ~ FindAllController ~ response", response)
    return response
}
module.exports = FindAllController;
