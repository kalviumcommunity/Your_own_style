const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username:{type: String, required:true},
    Password:{type: String, required:true},

 },
{
    timestamps: true
})

module.exports = mongoose.model('Users', UserSchema);
