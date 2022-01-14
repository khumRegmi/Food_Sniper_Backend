const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  food: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  service: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  environment: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  price: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: true,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model("Reviews", ReviewSchema);
