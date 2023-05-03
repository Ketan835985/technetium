const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const { createBook, getBooksData, getBooksWithAuthorDetails, getAuthorNameBook, getFilterUpdateBook, hardCoverStatus, UpdatePrice }= require("../controllers/bookController")
const { createPublisher }= require('../controllers/PublisherController')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", createBook  )

router.get("/getBooksData",getBooksData)

router.get("/getBooksWithAuthorDetails", getBooksWithAuthorDetails)

router.post ('/createPublisher', createPublisher)

router.get('/getAuthorBooks',getAuthorNameBook)

router.get('/getFilterUpdateBook', getFilterUpdateBook)

router.put('/hardCoverStatus', hardCoverStatus)

router.put('/UpdatePrice', UpdatePrice)

module.exports = router;