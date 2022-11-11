const ProductModel = require("../Product.Model");

const FindAllService = async () => {
  try {
    const query = {};
    const options = {
      page: 1,
      limit: 10,
    };
    const rep = await ProductModel.paginate(query, options);
    console.log("🚀 ~ file: FindAllProducts.js ~ line 14 ~ FindAllService ~ rep", rep)
    return rep
    
  } catch (error) {
    console.log(`erorr handler FindAllService`, error);
  }
};
module.exports = FindAllService;
