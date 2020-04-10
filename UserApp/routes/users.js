var express = require('express');
var router = express.Router();
const api=require('../api/usersdetails');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userdetails=api.getUsers();
  for(let user of userdetails){
    res.write(JSON.stringify(user)+"\n");
  }
  res.end();
});

module.exports = router;
