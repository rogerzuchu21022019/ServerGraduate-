const UserService = require("./User.Service");

const UserController = async (email, password, phone, address, name) => {
  const user = {
    email: email,
    password: password,
    phone: phone,
    address: address,
    name: name,
  };
  const savedUser = await UserService(user);
  return savedUser;
};

module.exports = UserController;
