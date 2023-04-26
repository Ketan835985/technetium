const mongoose = require("mongoose")


const userSchema= new mongoose.Schema({
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    mobile : {
        type : String,
        unique : true,
        require : true
    },
    emailID : String,
    gender : {
        type: String,
        enum:["male", "female", "other"]
    },
    isIndian: Boolean,
    car : [String]
}, {timestamps : true})

module.exports = mongoose.model('user', userSchema)