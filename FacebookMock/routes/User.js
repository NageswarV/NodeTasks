var express = require("express");
var path = require("path");
var data = require("../helpers/userdata");
var bodyParser = require("body-parser");
var route = express.Router();
route.use(bodyParser.urlencoded({ extended: false }));
route.use("/:username/details", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "views", "UserDetails.html"));
});
route.use("/:username/posts", function (req, res) {
  res.sendFile(path.join(__dirname, "../", "views", "Posts.html"));
});
route.use("/:username", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../", "views", "Homepage.html"));
});
module.exports = route;
