const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const ObjectId = require('mongoose').Types.ObjectId


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
        let CreatedBook  = await bookModel.create(req.body)
        return res.send({book :CreatedBook})
    }
    else{
        return res.send("error find in Book data")
    }

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
