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

router.get('/hardCoverStatus', hardCoverStatus)

router.get('/UpdatePrice', UpdatePrice)

module.exports = router;