const data=require('../database/UserDetails');

module.exports = {
    getUsers : function(){
        return data;
    }
};