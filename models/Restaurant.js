const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  food_type: {
    type: [String],
    required: true,
  },
  restaurant_type: {
    type: [String],
    default: ["Dining", "Takeout"],
  },
  hours: {
    open: { type: String },
    close: { type: String },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
    required: true,
  },
  banner_image: {
    type: "String",
    required: true,
  },
  address: {
    city: { type: String, required: true },
    street: { type: String, required: true },
  },
  menu: [
    {
      name: { type: String, required: true },
      unit_price: { type: Number, required: true },
      type: { type: String, required: true },
    },
  ],
  features: {
    reservation: { type: Boolean },
    bar: { type: Boolean },
    buffet: { type: Boolean },
    delivery: { type: Boolean },
  },
  social: {
    facebook: { type: String, default: "www.facebook.com" },
    instagram: { type: String, default: "www.instagram.com" },
  },
  location: {
    type: { type: "String" },
    coordinates: { type: [Number] },
  },
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);
