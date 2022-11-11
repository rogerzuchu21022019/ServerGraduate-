const randomKeys = require(`randombytes`);
const ACCESS_TOKEN_KEY = randomKeys(32).toString(`hex`);
const REFRESH_TOKEN_KEY = randomKeys(32).toString(`hex`);
module.exports = { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY };
