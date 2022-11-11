const ProductModel = require("../Product.Model");

const FindByIDService = async (productID) => {
  try {
    const query = { productID: productID };
    const product = await ProductModel.findOne(query);
    console.log(
      "🚀 ~ file: FindByID.js ~ line 6 ~ FindByIDService ~ product",
      product
    );
    return product;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindByID.js ~ line 9 ~ FindByIDService ~ error handler",
      error.message
    );
  }
};
module.exports = FindByIDService;
