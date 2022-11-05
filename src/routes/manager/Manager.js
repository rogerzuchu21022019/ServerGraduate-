const ApiUser = require("../api/Api.User");
const ApiProduct = require(`../api/Api.Product`);

const ManagerRouter = (app, fixPublic) => {

  const MAIN = "/api"; 
  const USERS = "users";
  const PRODUCTS = "products";
  const SUB_USERS = `${MAIN}/${USERS}`; 
  const SUB_PRODUCTS = `${MAIN}/${PRODUCTS}`; 
  /* Users */
  app.use(MAIN, ApiUser.loginRouter, fixPublic);
  app.use(MAIN, ApiUser.logoutRouter, fixPublic);
  app.use(SUB_USERS, ApiUser.registerRouter, fixPublic);

  /* Products */
  app.use(MAIN, ApiProduct.homeRouter, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.analysticRouter, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.chartRouter, fixPublic);
  app.use(SUB_PRODUCTS, ApiProduct.dataTableRouter, fixPublic);
};

module.exports = ManagerRouter;
