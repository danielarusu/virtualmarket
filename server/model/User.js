var restful = require('node-restful');
var mongoose = restful.mongoose;

var database = require('../config/config.js');


mongoose.connect(database, function(err, res){
    if(err) {
        console.log('Cannot connect to ' + database);
        console.log(err);
    }
    else{
        console.log('Connected to'+ database);
        console.log(res);
    }
})


var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: string, required: true, unique: true},
    password: {type: string, required: true}
})

//module.exports = restful.model('userModel', UserSchema);

var userModel = mongoose.model('user', UserSchema);

exports.userModel = userModel;