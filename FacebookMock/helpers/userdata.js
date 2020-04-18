var db=require('../database/db');
module.exports={getDetails : function(username) {
{
    for(let user of db.userdetails){
        if(user.username===username)
            return user;
    }
    return null;
}},
getPosts:function(username){
    var posts=[];
    for(let post of db.articles){
        if(post.username===username){
            posts.push( post.article);
        }
    }
    return posts;
},
updatePosts:function(user,post){
    db.articles.push({username:user,article:post});
}
}