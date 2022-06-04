const mongoose = require("mongoose");

const signupSchema = {
    name: String,
    email: String,
    password: String,
    re_password: String
}

const Sign = mongoose.model("Sign", signupSchema);

module.exports = Sign;