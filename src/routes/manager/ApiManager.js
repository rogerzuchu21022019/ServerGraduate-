const ApiUser = require("../api/Api.User");
const ApiProduct = require(`../api/Api.Product`);
const ApiAdmin = require(`../api/Api_Admin`);

const ManagerRouter = (app, fixPublic) => {

  const MAIN = "/api"; 
  const USERS = "users";
  const PRODUCTS = "products";
  const SUB_USERS = `${MAIN}/${USERS}`; 
  const SUB_PRODUCTS = `${MAIN}/${PRODUCTS}`; 


  app.use(MAIN, ApiAdmin.getUsers, fixPublic);
  app.use(MAIN, ApiAdmin.getUser, fixPublic);
  app.use(MAIN, ApiAdmin.updateUser, fixPublic);
  app.use(MAIN, ApiAdmin.deleteUser, fixPublic);

  /* Users */
  app.use(MAIN, ApiUser.login, fixPublic);
  app.use(MAIN, ApiUser.logout, fixPublic);
  app.use(SUB_USERS, ApiUser.register, fixPublic);

  /* Products */
  app.use(MAIN, ApiProduct.home, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.analystic, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.chart, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.dataTable, fixPublic);

  app.use(SUB_PRODUCTS, ApiProduct.add, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.findAll, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.findByID, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.search, fixPublic);
};

module.exports = ManagerRouter;
