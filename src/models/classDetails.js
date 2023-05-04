//className , classId, className:String,
//    classId:Number,
//    classType:String,
//    numberOfStudent:Number
// name: String,
//     class_id: {
//         type: ObjectId,
//         ref: "Class",
//         require:true
//     }, 
//     rollNumber: Number,
//     avgMarks:Number,
//     favSub:[String] name , id, fav, avg

const mongoose = require('mongoose')


const classSchema = new mongoose.Schema({
    className : String,
    classId : Number,
    classType : String,
    numberOfStudent: Number,

} ,{timestamps:true})

module.exports = mongoose.model('class', classSchema)