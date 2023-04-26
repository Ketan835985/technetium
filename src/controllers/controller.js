const userData = require("../userModel/userModel")
const bookData = require("../bookModel/bookModel")


const fetchData = async function(req,res){
    let fetchData = await userData.find()
    res.send({msg : fetchData})
}

const createData = async function(req,res){
    let Data = req.body
    let savedData = await userData.create(Data)
    res.send({msg : savedData})
}

const createBook = async function(req,res){
    let Data = req.body
    let saveBook = await bookData.create(Data)
    res.send ({msg : saveBook})
}

const fetchBook = async function(req,res){
    let allBook = await bookData.find()
    res.send({msg : allBook})
}
module.exports.fetchData = fetchData
module.exports.createData = createData
module.exports.createBook = createBook
module.exports.fetchBook = fetchBook