const express = require("express");
const userDB = require("../models/signup");
const router = new express.Router();

router.post("/logout", async (req, res) => {
  const value = await userDB.findOneAndUpdate(
    { token: req.body.token },
    { $set: { token: null } }
  );
  try {
    if (value != null) {
      return res.send("success");
    } else {
      return res.send("error");
    }
  } catch {
    return res.send("error");
  }
});
module.exports = router;
