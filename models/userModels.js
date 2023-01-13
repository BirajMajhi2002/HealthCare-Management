const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "FirstName is require"],
  },
  lastName: {
    type: String,
    required: [true, "LastName is require"],
  },

  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const userModel = mongoose.model("users", UserSchema);
module.exports = userModel;
