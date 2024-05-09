const mongoose = require("mongoose");

const TopsSchema = new mongoose.Schema({
    CATEGORIES:{type: String, required:true},
    NAME:{type: String, required:true},
    IMAGES:{type: String, required:true},
    RATING:{type: String, required:true},
    SIZE_1:{type: String, required:true},
    SIZE_2:{type: String, required:true},
    SIZE_3:{type: String, required:true},
    SIZE_4:{type: String, required:true},
    SIZE_5:{type: String, required:true},
    SIZE_6:{type: String, required:true},

},{
    // timestamps means used to declare when it is created and when it is last updated
    timestamps:true
})
module.exports = mongoose.Model("Tops",TopsSchema)