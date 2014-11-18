var dbPath = require('../model/User.js');

exports.loginUser = function(req, res){
    var username = req.body.username || '';
    var password = req.body.password || '';

    if(username == '' || password == ''){
        return req.send(401);
    }

    dbPath.userModel.findOne({username: username}, function(err, user){

    })
}