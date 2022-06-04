const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin-sneha:test123@cluster0.rkpkk.mongodb.net/signupDB")

app.use("/", require("./routes/signupRoutes"))

app.listen(3001, function () {
  console.log("Express is running on port 3001");
});
