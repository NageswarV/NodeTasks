var express = require("express");
var path = require("path");
var router = express.Router();
router.use("/", function (req, res, next) {
  res.setHeader("content-type", "text/html");
  res.sendFile(path.join(__dirname, "../", "views", "LoginPage.html"));
});
module.exports = router;
