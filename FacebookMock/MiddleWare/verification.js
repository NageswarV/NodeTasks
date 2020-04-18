var express=require('express');
var route=express.Router();
var credentials=require('../database/db');
route.use(function(req,res,next) {
    if(req.cookies.is_logged_in && req.cookies.username){
        res.redirect('http://localhost:3000/user/'+req.cookies.username);
    }
    else{
        next();
    }
});
module.exports=route;