const userData = require("../userModel/userModel")


const fetchData = async function(req,res){
    let fetchData = await userData.find()
    res.send({msg : fetchData})
}

const createData = async function(req,res){
    let Data = req.body
    let savedData = await userData.create(Data)
    res.send({msg : savedData})
}
module.exports.fetchData = fetchData
module.exports.createData = createData