const ProductModel = require("../Product.Model");

const SearchService = async (name,brand,description,specials) => {
  try {
    const query = {
      $or: [
        { name: name },
        { brand: brand },
        { description: description },
        { specials: specials },
      ],
    };
    const productItem = await ProductModel.find(query);
    console.log(
      "🚀 ~ file: FindByID.js ~ line 6 ~ FindByIDService ~ product",
      productItem
    );
    return productItem;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindByID.js ~ line 9 ~ FindByIDService ~ error handler",
      error.message
    );
  }
};
module.exports = SearchService;
