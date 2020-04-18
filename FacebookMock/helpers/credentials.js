var db=require('../database/db');
module.exports={getCredentials:function(username){
    for(let user of db.credentials){
        if(user.username===username)
            return user.password;
    }
    return undefined;
},
setAuthKey:function(user,authToken){
    db.auth_keys.push({username:user,auth_token:authToken});
},
getAuthKey:function(user){
    for(let authKey of db.auth_keys){
        if(authKey.username===user)
            return authKey.auth_token;
    }
    return null;
}
}