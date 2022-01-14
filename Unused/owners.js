const express = require("express");

const router = express.Router();
const Owner = require("../models/Owner");

router.use(express.json());

router.post("/", async (req, res) => {
  const owner = new Owner({
    name: req.body.name,
  });
  try {
    const savedOwner = await owner.save();
    res.json(savedOwner);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
