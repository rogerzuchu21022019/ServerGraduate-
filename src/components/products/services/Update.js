const UpdateByID = async (id, product) => {
  try {
    const query = { id };
    const update = {
      $set: product,
    };
    const optionUpdate = {
      new: true,
      upsert: true,
    };
    const data = await ProductModel.findByIdAndUpdate(query, update, optionUpdate);
    return data;
  } catch (error) {}
};
module.exports = UpdateByID;
