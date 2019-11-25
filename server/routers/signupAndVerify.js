const express = require("express");
const userDB = require("../models/signup");

const router = new express.Router();

var tempEmail = null;
var user = null;


router.post("/signup", async (req, res) => {
  user = new userDB(req.body);

  tempEmail = req.body.email;
  const checkUser = await userDB.findOne({ email: tempEmail });

  try {
    if (checkUser == null) {
      console.log("http://localhost:8888/verifyaccount");
      return res.send(`Please verify your account for ${tempEmail}`);
    } else {
      res.send("User already exist");
    }
  } catch (e) {
    res.send("Error creating account" + e);
  }
});

router.get("/verifyaccount", async (req, res) => {
  try {
    await user.save();
    tempEmail = null;
    user = null;
    res.send("Account created successfully");
  } catch (e) {
    tempEmail = null;
    user = null;
    res.send("Error in verifying account" + e);
  }
});

module.exports = router;
