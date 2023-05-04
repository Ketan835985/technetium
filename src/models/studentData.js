//     favSub:[String] name , id, fav, avg

const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    studentName : String,
    studentId : Number,
    favSubject : String,
    avrMarks: Number,

} ,{timestamps:true})

module.exports = mongoose.model('student',studentSchema)