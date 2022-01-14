const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 4,
  },
  email: {
    type: String,
    required: true,
    max: 256,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  priviliged: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
