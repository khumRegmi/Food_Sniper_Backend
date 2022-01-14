const router = require("express").Router();

const Review = require("../models/Review");

// post a review for a restaurant
router.post("/review/:restaurantId", async (req, res) => {
  const review = new Review({
    restaurantId: req.params.restaurantId,
    userId: req.body.userId,
    food: req.body.food,
    service: req.body.service,
    environment: req.body.environment,
    price: req.body.price,
    comment: req.body.comment,
  });
  try {
    const savedReview = await review.save();
    res.send(savedReview);
  } catch (err) {
    res.send({ message: err });
  }
});

//search for restaurant
router.get("/restaurant/search");

module.exports = router;
