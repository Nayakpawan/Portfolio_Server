const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        unique: false
    },
    name:String,
    message:String
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
