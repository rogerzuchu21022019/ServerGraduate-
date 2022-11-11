const SearchService = require("../services/Search");

const SearchController = async (name, brand, description, specials) => {
  try {
    const response = await SearchService(name, brand, description, specials);
    console.log(
      "🚀 ~ file: Search.js ~ line 6 ~ SearchController ~ response",
      response
    );
    return response;
  } catch (error) {
    console.log(
      `🚀 ~ file: Search.js ~ line 9 ~ SearchController ~ error handler`,
      error.message
    );
  }
};
module.exports = SearchController;

