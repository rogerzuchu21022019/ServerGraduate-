const ProductModel = require(`../Product.Model`);
const createError = require(`http-errors`);
const AddService = async (product) => {
  try {
    const productItem = await ProductModel.create(product);
    console.log("🚀 ~ file: AddProduct.js ~ line 6 ~ AddService ~ productItem", productItem)
    productItem ? productItem : createError(401);
    
    return productItem;
  } catch (error) {
    console.log(`error handler AddService`, error);
  }
};
module.exports = AddService;
