const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

const mongoose = require("mongoose");

// lightweight npm package that automatically loads environment variables from a . env file into the process
require("dotenv/config");

app.use(cors());
app.use(express.json());

//Import Routes
const admin = require("./routes/admin");
const auth = require("./routes/auth");
const restaurant = require("./routes/restaurants");

//use imported routes
app.use("/admin", admin);
app.use("/auth", auth);
app.use("/restaurant", restaurant);

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB");
});

// how do we start listening to the server
// server listens at specified port
app.listen(5000, () => console.log("LIstening at port 5000"));
