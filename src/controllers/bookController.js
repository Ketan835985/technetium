const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const ObjectId = require('mongoose').Types.ObjectId
// const mongoose = require('mongoose')


const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

/*3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
In this api, you have to write a logic that validates the following :
The authorId is present in the request body. If absent send an error message that this detail is required
If present, make sure the authorId is a valid ObjectId in the author collection. A valid ObjectId in author collection means that a document must exist with this id. If not then send an error message that the author is not present.
The publisherId is present in the request body. If absent send an error message that this detail is required
If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.
4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 
*/

const createBook = async function(req,res){
    let data = req.body
    if(ObjectId.isValid(data.publisher) && ObjectId.isValid(data.author)){
        if(await authorModel.findById(data.author) && await publisherModel.findById(data.publisher)){
        let CreatedBook  = await bookModel.create(req.body)
        return res.send({book :CreatedBook})
        }
        else{
           return res.send("Author/publisher is not Present")
        }
    }
    else{
        return res.send("error find in Book data")
    }

}

/*List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
*/

const getAuthorNameBook = async function(req,res){
    const allBooks = (await bookModel.find().populate('author').populate('publisher')).filter(x=>x.author.authorName = "Chetan Bhagat")
    res.send({data: allBooks})
}






/*find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query with author_id from previous query)
*/

const getFilterUpdateBook = async function(req,res){
    const allAuthor = await bookModel.findOneAndUpdate(
        {bookName : "Two states"},
        {$set : {price : 100}},
        {new : true}
    ).populate('author').populate('publisher')

    res.send({allData : allAuthor})
}

// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.

const getPriceBooks = async function(req,res){
    const allBooks = (await bookModel.find().populate('author').populate('publisher')).filter(x=>{
        if(x.price >= 50 && x.price <= 100) return author.authorName
    })
}

/* a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
 b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)
*/

const hardCoverStatus = async function(req,res){

    const allBooks = await bookModel.find().populate({path : 'publisher', match : {"publisher.name" : {$in : ['Penguin','HarperCollins']}},transform:{$set :{isHardCover : true}}})
        

    res.send({msg : allBooks})
}

const UpdatePrice = async function(req,res){
    
    const allBooks = await bookModel.find().populate({path:'author', match : {"author.rating" : {$gte : 3.5}},transform: {$set : {price : 10}}})
    res.send({msg : allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getAuthorNameBook = getAuthorNameBook
module.exports.getFilterUpdateBook = getFilterUpdateBook
module.exports.hardCoverStatus = hardCoverStatus
module.exports.UpdatePrice = UpdatePrice
module.exports.getPriceBooks = getPriceBooks