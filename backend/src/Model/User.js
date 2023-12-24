const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  username : {type : String},
  email: { type: String },
  password: { type: String },
  selectedOption : {type: String}
});
const User = mongoose.model("Register", LoginSchema);

module.exports = User;
