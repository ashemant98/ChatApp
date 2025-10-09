const express = require("express");

const router = express.Router();

router.get("/test2", (req, res) => {
  res.send("test 2 endpoint");
});

module.exports = router;
