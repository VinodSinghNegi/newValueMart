const express = require("express");
const userDB = require("../models/signup");

const router = new express.Router();
const jwt = require("jwt-simple");

var token = null;



router.post("/login", async (req, res) => {
  const userEmail = req.body.email;
  const userPass = req.body.password;
  try {
    const foundValue = await userDB.findOne({ email: userEmail });
    if (foundValue.password == userPass) {
     
      const userId = foundValue._id

      const secretKey = "correct";
      let date = new Date();
      let time = date.getTime();
      token = jwt.encode({ email: userEmail, time }, secretKey);
      await userDB.updateOne({ email: userEmail }, { token: token });
      const customResponse = { token, userId }
      res.send(customResponse);

    } else {
      res.send("Wrong Email or Password");
    }
  } catch {
    return res.send("Wrong Email or Password");
  }
});

module.exports = router;
