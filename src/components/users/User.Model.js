const mongoose = require("mongoose");
const { userConnection } = require("../../utils/server/MultiConnection");

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    address: {
      type: String,
      required: false,
    }
  },
  { collation: "User Collection", timestamps: true }
);


//Export the model
module.exports = userConnection.model("User", userSchema);
