const AddService = require("../services/AddProduct");


const AddController = async (product) => {
   try {
     const response = await AddService(product);
     console.log("🚀 ~ file: AddProduct.js ~ line 7 ~ AddController ~ response", response)
     return response;
   } catch (error) {
    
   }
}
module.exports = AddController;