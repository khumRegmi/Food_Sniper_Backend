const router = require("express").Router();

const User = require("../models/User");
const Restaurant = require("../models/Restaurant");

//get all the users
router.get("/users", async (req, res) => {
  const userList = await User.find({});
  res.send(userList);
});

// update the privilege of a specific user
router.patch("/users/update/:userId", async (req, res) => {
  const user = await User.updateOne(
    { _id: req.params.userId },
    {
      $set: {
        priviliged: true,
      },
    }
  );
});

//create a restaurant
router.post("/restaurants/create", async (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    food_type: req.body.food_type,
    restaurant_type: req.body.restaurant_type,
    hours: req.body.hour,
    owner: req.body.owner,
    banner_image: req.body.banner_image,
    address: req.body.address,
    menu: req.body.menu,
    features: req.body.features,
    social: req.body.social,
    location: req.body.location,
  });
  try {
    const savedRestaurant = await restaurant.save();
    res.json(savedRestaurant);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/restaurants/update/:restaurantId", async (req, res) => {
  const restaurant = await User.updateOne(
    {
      _id: req.params.restaurantId,
    },
    {
      $set: req.body,
    }
  );
});

module.exports = router;
