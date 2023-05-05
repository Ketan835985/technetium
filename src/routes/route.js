const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const { createBook, getBooksData, getBooksWithAuthorDetails, getAuthorNameBook, getFilterUpdateBook, hardCoverStatus, UpdatePrice, twoStateUpdate, createClass, createStudent, getClass, getStudent }= require("../controllers/bookController")
const { createPublisher }= require('../controllers/PublisherController')
router.get("/test-me", function (req, res,next) {
    res.send("My first ever api!", req.headers["user-agent"])
    next()
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
router.get('/twoStateUpdate',twoStateUpdate)

router.post ('/createClass', createClass)
router.post('/createStudent', createStudent)

router.get('/getClass', getClass)
router.get('/getStudent', getStudent)

module.exports = router;