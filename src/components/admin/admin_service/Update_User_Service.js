const User_Model = require("../../users/User_Model");

const UpdateUserSerive = async (name, phone, address, imageUrl, dob, id) => {
  const query = id
  const updateOption = {
    name: name,
    phone: phone,
    address: address,
    imageUrl: imageUrl,
    dob: dob,
  };
  const conditionUpdate = {
    upsert: true,
    new: true,
  };
  const response = await User_Model.findByIdAndUpdate(
    query,
    updateOption,
    conditionUpdate
  )
  
  return response;
};
module.exports = UpdateUserSerive;
