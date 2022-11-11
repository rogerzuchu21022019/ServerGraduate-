const UserModel = require("../User_Model");

const createError = require(`http-errors`);
const RegisterService = async (
  name,
  email,
  phone,
  password,
  address,
  imageUrl,
  role
) => {
  const user = await UserModel.create({
    name,
    email,
    phone,
    password,
    address,
    imageUrl,
    role,
  });

  if (!user) {
    createError(401);
  }
  await UserModel.findOne({
    email,
  })
    .then((err, data) => console.log("data pending", data))
    .then((err, data) => console.log("data Fulfilled", data))
    .catch();
  // console.log(`isExistahihihihihi`, isExist);
  return user;
};
module.exports = RegisterService;
