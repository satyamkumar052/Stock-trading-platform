const { Schema } = require('mongoose');

const UserSchema = new Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default:new Date,
    },
});

module.exports = { UserSchema };