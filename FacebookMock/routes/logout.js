var express=require('express');
var route=express.Router();
route.use('/',function(req,res,next) {
    res.cookie('username','',{maxAge:0});
    res.cookie('auth_key','',{maxAge:0});
    res.cookie('is_logged_in',false);
    res.redirect('http://localhost:3000/');
});
module.exports=route;