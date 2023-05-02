const mongoose = require('mongoose');

/*{ 
_id: ObjectId("61951bfa4d9fe0d34da86829"),
        authorName:"Chetan Bhagat",
        age:50,
        address:"New Delhi",
rating: 2
    } 

*/

const authorSchema = new mongoose.Schema({
    authorName: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    rating: { type: Number, required: true }

}, { timestamps: true });



module.exports = mongoose.model('KeTanAuthor', authorSchema)
