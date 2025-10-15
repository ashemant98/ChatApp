const express = require("express");
const {
  SignupController,
  LoginController,
} = require("../controller/authController");

const router = express.Router();

router.get("/test2", (req, res) => {
  res.send("test 2 endpoint");
});

router.post("/signup", SignupController);
router.post("/login", LoginController);

module.exports = router;
