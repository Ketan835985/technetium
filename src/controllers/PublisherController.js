const publisherModel = require('../models/publisherModel')



//2. Write a POST api that creates a publisher from the details in the request 


const createPublisher = async function(req,res){
    const allPublisher = await publisherModel.create(req.body)
    res.send({publisher : allPublisher})
}


module.exports.createPublisher = createPublisher