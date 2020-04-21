var express = require("express");
var credentials = require("../helpers/credentials");
var route = express.Router();
route.use(function (req, res, next) {
  if (req.cookies.is_logged_in && req.cookies.username) {
    if (credentials.getAuthKey(req.cookies.username) === req.cookies.auth_key) {
      res.redirect("http://localhost:3000/user/" + req.cookies.username);
    } else {
      req.cookies.is_logged_in = false;
      next();
    }
  } else {
    next();
  }
});
module.exports = route;
