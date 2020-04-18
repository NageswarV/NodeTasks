var express=require('express');
var route=express.Router();
var credentials=require('../helpers/credentials');
var data=require('../helpers/userdata');
var coockie=require('cookie-parser');
var bodyParser=require('body-parser');
var path=require('path');
var crypto=require('crypto');
var authorization=require('../MiddleWare/authorization');
route.use(bodyParser.urlencoded({extended:false}));
// route.use('/auth',authorization);
route.use('/auth',function(req,res,next){
    var password=credentials.getCredentials(req.body.username);
    if(password && password===req.body.password){
        next();
    }
    else{
        res.redirect("http://"+req.hostname+":3000"+"/login");     
    }
});
route.use('/auth',function(req,res,next){
    res.cookie('is_logged_in','yes');
    var auth_key=crypto.createHash("SHA1").update(req.body.username).digest('hex');
    res.cookie("auth_key",auth_key);
    res.cookie("username",req.body.username);
    credentials.setAuthKey(req.body.username,auth_key);
    res.redirect('http://localhost:3000/user/'+req.body.username);
                
});
route.use('/user/details',function(req,res){
    var username=req.cookies.username;
    res.send(JSON.stringify(data.getDetails(username)));
});
route.use('/user/posts/new',function(req,res){
    var username=req.cookies.username;
    var post=req.query.post;
    data.updatePosts(username,post);
    res.sendFile(path.join(__dirname,'../','views','Posts.html'));
    
})
route.use('/user/posts',function(req,res){
var username=req.cookies.username;
var posts=data.getPosts(username);
res.send(JSON.stringify(posts));
});
module.exports=route;