const mongoose = require("mongoose");

const OwnerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Owners", OwnerSchema);
