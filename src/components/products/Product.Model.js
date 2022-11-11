const mongoose = require(`mongoose`);
const mongoosePaginate = require(`mongoose-paginate-v2`);
const { userConnection } = require("../../utils/server/MultiConnection");

const Product = new mongoose.Schema(
  {
    productID: { type: String, required: true, trim: true ,unique: true},

    name: { type: String, lowercase: true, required: true, trim: true },

    brand: { type: String, required: true, trim: true },

    description: { type: String, required: false, trim: true },

    release_time: { type: Date, required: false, trim: true },

    quantity: { type: Number, default: 0 },

    avgRating: { type: Number, default: 0 },

    comments: Array,

    images: { type: Array, required: false },

    videos: { type: Array, required: false },

    optionsType: { type: Array, required: false },

    time_import_to_stock: { type: Date, required: false },

    stocks_quantity: { type: Number, required: false, default: 0 },

    sell_quantity: { type: Number, required: false, default: 0 },

    specials: { type: Array, default: [] },
  },
  { collection: "Product Collection", timestamps: true, typeKey: "type" }
);
Product.plugin(mongoosePaginate);
Product.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

//Export the model
module.exports = userConnection.model("Product", Product);
