const express = require("express");
const router = express.Router();
const Sign = require("../models/signupModel");

router.route("/create").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const re_password = req.body.re_password;
    const newSign = new Sign({
        name,
        email,
        password,
        re_password
    });

    newSign.save();
})

module.exports = router;