const FindByIDService = require("../services/FindByID");

const FindByIDController = async (productID) => {
  try {
    const product = await FindByIDService(productID);
    console.log(
      "🚀 ~ file: FindByID.js ~ line 6 ~ FindByIDController ~ product",
      product
    );
    return product;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindByID.js ~ line 9 ~ FindByIDController ~ error handler",
      error.message
    );
  }
};
module.exports = FindByIDController;
