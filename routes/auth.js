const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const jwt = require("jsonwebtoken");

const { registerValidation, loginValidation } = require("../routes/validation");

router.post("/register", async (req, res) => {
  //lets validate data before we create a user
  const { error } = registerValidation(req.body);
  if (error) return res.send(error.details[0].message);

  //check if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.send("Email already exists");

  //hash the passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //create a new user
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.send({ username: user._id, token: token });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LoGIN
router.post("/login", async (req, res) => {
  //lets validate data before we log a user
  const { error } = loginValidation(req.body);
  console.log(error.details);
  if (error) return res.send(error.details[0].message);

  //checking if the email exists
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.send("User is not found");

  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status.send("Invald Password");

  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
