const mongoose = require("mongoose")
/*On similar lines as above(today’s mongodb session APIs), complete this assignment and submit explainer video for the same : Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books. 
*/

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        require : true,
        unique : true
    },
    authorName : {
        type : String,
        require : true
    },
    category : String,
    year : Number,
},{timestamps : true})

module.exports = mongoose.model('book', bookSchema)
